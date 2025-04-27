// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Import GoogleAuthProvider

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1raI87jmAIXqY1y3ZUmVj4xtHuvJcZNw",
  authDomain: "sdietx.firebaseapp.com",
  projectId: "sdietx",
  storageBucket: "sdietx.firebasestorage.app",
  messagingSenderId: "901981570951",
  appId: "1:901981570951:web:1bcfde9ab04163836cb522",
  measurementId: "G-BTC53D5NG4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Google Provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(); // Export GoogleAuthProvider