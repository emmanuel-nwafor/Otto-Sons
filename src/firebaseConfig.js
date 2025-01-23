// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration object (copy this from your Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyBAPlQxNlKxyaKhXmPQspcDn-zoeY73A-U",
  authDomain: "my-app-e8614.firebaseapp.com",
  projectId: "my-app-e8614",
  storageBucket: "my-app-e8614.appspot.com",
  messagingSenderId: "256891707693",
  appId: "1:256891707693:web:ce3d5ed400e8bc2b0df3a4",
  measurementId: "G-FW7MDB7B45", // Optional: Used for Google Analytics
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app); // Authentication
const db = getFirestore(app); // Firestore Database
const storage = getStorage(app); // Storage for files

// Export services for reuse
export { app, auth, db, storage };
