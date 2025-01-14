// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAPlQxNlKxyaKhXmPQspcDn-zoeY73A-U",
  authDomain: "my-app-e8614.firebaseapp.com",
  projectId: "my-app-e8614",
  storageBucket: "my-app-e8614.firebasestorage.app",
  messagingSenderId: "256891707693",
  appId: "1:256891707693:web:ce3d5ed400e8bc2b0df3a4",
  measurementId: "G-FW7MDB7B45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);