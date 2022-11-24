import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmSY1b1SRTQikDDFUgtISoopf0rSqRHGw",
  authDomain: "chat-5ed49.firebaseapp.com",
  projectId: "chat-5ed49",
  storageBucket: "chat-5ed49.appspot.com",
  messagingSenderId: "386092446472",
  appId: "1:386092446472:web:59a6736b43ce3681aff2bd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();