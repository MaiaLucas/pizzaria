import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDwVDJDW4O2L3qUUuKYtsrO5gpHvgV5D4E",
  authDomain: "pizzaria-326e9.firebaseapp.com",
  projectId: "pizzaria-326e9",
  storageBucket: "pizzaria-326e9.appspot.com",
  messagingSenderId: "650318818439",
  appId: "1:650318818439:web:97319acc5b5d7e734c9c22",
  measurementId: "G-60WZ6MPPMF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
