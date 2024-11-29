import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkrcqi8tvDL_5Tygsn2DhWq3HRoQz9PZo",
  authDomain: "k-tienda.firebaseapp.com",
  projectId: "k-tienda",
  storageBucket: "k-tienda.firebasestorage.app",
  messagingSenderId: "364565376248",
  appId: "1:364565376248:web:ef38590a7acaf9f4ebdf0d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db