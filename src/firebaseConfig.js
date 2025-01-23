// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Firestore for database
import { getStorage } from "firebase/storage"; // Firebase Storage for file uploads

// Firebase configuration object (copy this from your Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyBAPlQxNlKxyaKhXmPQspcDn-zoeY73A-U",
  authDomain: "my-app-e8614.firebaseapp.com",
  projectId: "my-app-e8614",
  storageBucket: "my-app-e8614.appspot.com", // Ensure the bucket URL is correct
  messagingSenderId: "256891707693",
  appId: "1:256891707693:web:ce3d5ed400e8bc2b0df3a4",
  measurementId: "G-FW7MDB7B45", // Optional: Used for Google Analytics
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app); // For authentication
const db = getFirestore(app); // For Firestore database
const storage = getStorage(app); // For Firebase Storage (e.g., images, files)

// Export services for use in other files
export { auth, db, storage };
