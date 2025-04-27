import React, { createContext, useState, useContext, useEffect } from "react";
import { auth, googleProvider } from "../firebase";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [role, setRole] = useState(null); // Role can be "user" or "host"
  const [loading, setLoading] = useState(true);

  // Sign up function
  const signup = (email, password, role) => {
    return createUserWithEmailAndPassword(auth, email, password).then(() => {
      setRole(role); // Set the role after signup
    });
  };

  // Login function
  const login = (email, password, role) => {
    return signInWithEmailAndPassword(auth, email, password).then(() => {
      setCurrentUser({ email, role });
    });
  };

  // Login with Google
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Logout function
  const logout = () => {
    setRole(null); // Clear the role
    setCurrentUser(null);
    return signOut(auth);
  };

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, role, setRole, signup, login, loginWithGoogle, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);