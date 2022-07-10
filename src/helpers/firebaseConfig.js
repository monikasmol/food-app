// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATWEUNeorY1LYfnTPOAvM2m3r4uLV-k8o",
  authDomain: "food-diary-1d1ae.firebaseapp.com",
  projectId: "food-diary-1d1ae",
  databaseURL:
    "https://food-diary-1d1ae-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "food-diary-1d1ae.appspot.com",
  messagingSenderId: "886016133817",
  appId: "1:886016133817:web:63af7507495bd3c5a4e968",
  measurementId: "G-WM1B1NZ530",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getDatabase();
