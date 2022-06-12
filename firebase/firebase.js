import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from "firebase/firestore";

// firebase init
const firebaseConfig = {
    apiKey: "AIzaSyB1A3WpdZVh55xv1T8gYeIaGl_xt_VThTo",
    authDomain: "rohyller-6f81e.firebaseapp.com",
    databaseURL: "https://rohyller-6f81e-default-rtdb.firebaseio.com",
    projectId: "rohyller-6f81e",
    storageBucket: "rohyller-6f81e.appspot.com",
    messagingSenderId: "711782218025",
    appId: "1:711782218025:web:111e4bd7c672d373de9f38",
    measurementId: "G-8WQH3W18HB"
  };
  
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

