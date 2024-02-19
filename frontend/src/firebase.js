// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estateexplorer-f7cc0.firebaseapp.com",
  projectId: "estateexplorer-f7cc0",
  storageBucket: "estateexplorer-f7cc0.appspot.com",
  messagingSenderId: "83198768815",
  appId: "1:83198768815:web:c757a9270745f6b4d8065a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
