// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-d2367.firebaseapp.com",
  projectId: "mern-auth-d2367",
  storageBucket: "mern-auth-d2367.appspot.com",
  messagingSenderId: "566158046579",
  appId: "1:566158046579:web:772762bb705b5382dd0106"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
