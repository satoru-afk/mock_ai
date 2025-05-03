// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAKrYWV9KihJxdw15Nk3HKDeQM96c-mH0",
  authDomain: "prepwise-58be8.firebaseapp.com",
  projectId: "prepwise-58be8",
  storageBucket: "prepwise-58be8.firebasestorage.app",
  messagingSenderId: "82325704965",
  appId: "1:82325704965:web:787509704325d88062e76c",
  measurementId: "G-JD78R4Y9E0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);