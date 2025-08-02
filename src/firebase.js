import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6VWbJYvcdscstLB3nWXo5FV3D9A9H0bI",
  authDomain: "form-app-24971.firebaseapp.com",
  projectId: "form-app-24971",
  storageBucket: "form-app-24971.firebasestorage.app",
  messagingSenderId: "901469605456",
  appId: "1:901469605456:web:35ac79b477843bf5aa8b55",
  measurementId: "G-0DZQHJM7B6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
