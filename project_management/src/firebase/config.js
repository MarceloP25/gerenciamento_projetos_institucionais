// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADMGv8JE4kv9uERfH5jHhg839KPJomAjM",
  authDomain: "secao-projetos-ifrp.firebaseapp.com",
  projectId: "secao-projetos-ifrp",
  storageBucket: "secao-projetos-ifrp.firebasestorage.app",
  messagingSenderId: "827890000263",
  appId: "1:827890000263:web:55127186df4c4551b03322",
  measurementId: "G-H057NM01WC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { app, db, storage, analytics };