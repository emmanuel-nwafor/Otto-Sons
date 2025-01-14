// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration object (from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyBAPlQxNlKxyaKhXmPQspcDn-zoeY73A-U",
  authDomain: "my-app-e8614.firebaseapp.com",
  projectId: "my-app-e8614",
  storageBucket: "my-app-e8614.firebasestorage.app",
  messagingSenderId: "256891707693",
  appId: "1:256891707693:web:ce3d5ed400e8bc2b0df3a4",
  measurementId: "G-FW7MDB7B45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
