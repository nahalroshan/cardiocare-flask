// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCVWT_0vTJ1W11eNESDdW2Mpc2p64yMiTU",
  authDomain: "cardiocare-47a2e.firebaseapp.com",
  projectId: "cardiocare-47a2e",
  storageBucket: "cardiocare-47a2e.appspot.com",
  messagingSenderId: "117855627048",
  appId: "1:117855627048:web:37fa2537ef0222471c921d",
  measurementId: "G-22XYHY8YH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app)
export {auth,app,db};