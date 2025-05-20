import React, { createContext, useContext, useState, useEffect } from "react";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const navigate = useNavigate();

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // Get additional user data from Firestore
          const userDoc = await getDoc(doc(db, "users", user.uid));
          
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setCurrentUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName || userData.name,
              photoURL: user.photoURL,
              role: userData.role,
              ...userData
            });
            
            // Auto-navigate on page refresh/reload based on role
            if (userData.role === "host" && window.location.pathname === '/') {
              navigate("/host-dashboard");
            }
          } else {
            // User exists in Auth but not in Firestore
            setCurrentUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL
            });
          }
        } catch (err) {
          console.error("Error fetching user data:", err);
          setError(err.message);
        }
      } else {
        setCurrentUser(null);
      }
      
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [navigate]);

  // Add network status monitoring
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Sign up with email and password
  const signup = async (email, password, role, additionalData = {}) => {
    setError(null);
    try {
      // Create auth user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Create user document in Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        role: role,
        createdAt: serverTimestamp(),
        ...additionalData
      });
      
      // Navigate based on role
      if (role === "host") {
        navigate("/host-dashboard");
      } else {
        navigate("/");
      }
      
      return user;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Log in with email and password
  const login = async (email, password, role) => {
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Verify user role matches expected role
      const userDoc = await getDoc(doc(db, "users", user.uid));
      
      if (userDoc.exists() && userDoc.data().role === role) {
        // Explicitly navigate based on role
        if (role === "host") {
          navigate("/host-dashboard");
        } else {
          navigate("/");  // For student/user role
        }
        return user;
      } else {
        // If role doesn't match, sign out and throw error
        await signOut(auth);
        throw new Error(`You are not registered as a ${role}. Please use the correct login option.`);
      }
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Sign in with Google
  const googleSignIn = async (role) => {
    setError(null);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      // Check if user already exists in Firestore
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);
      
      if (userDoc.exists()) {
        // Check if the role matches
        if (userDoc.data().role !== role) {
          await signOut(auth);
          throw new Error(`This Google account is already registered as a ${userDoc.data().role}. Please use a different account.`);
        }
      } else {
        // Create new user document with role
        await setDoc(userDocRef, {
          uid: user.uid,
          email: user.email,
          name: user.displayName,
          photoURL: user.photoURL,
          role: role,
          createdAt: serverTimestamp()
        });
      }
      
      // Navigate based on role - AFTER all checks and operations
      if (role === "host") {
        navigate("/host-dashboard");
      } else {
        navigate("/");  // For student/user role
      }
      
      return user;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Log out
  const logout = async () => {
    setError(null);
    try {
      await signOut(auth);
      navigate("/"); // Redirect to home page after logout
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Update user profile
  const updateProfile = async (userData) => {
    if (!currentUser) throw new Error("No authenticated user");
    
    try {
      await setDoc(doc(db, "users", currentUser.uid), {
        ...userData,
        updatedAt: serverTimestamp()
      }, { merge: true });
      
      // Update local user state
      setCurrentUser(prev => ({
        ...prev,
        ...userData
      }));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Make sure to provide the value and return children without any Router wrapper
  const value = {
    currentUser,
    loading,
    error,
    signup,
    login,
    googleSignIn,
    logout,
    updateProfile,
    isOnline
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : <div>Loading...</div>}
    </AuthContext.Provider>
  );
};


