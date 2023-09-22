// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth'; 
const firebaseConfig = {
    apiKey: "AIzaSyAzbY5UTBTRIgd1zjKbWoJHjKbWKElDo2E",
    authDomain: "dermacure-ai.firebaseapp.com",
    projectId: "dermacure-ai",
    storageBucket: "dermacure-ai.appspot.com",
    messagingSenderId: "731769293567",
    appId: "1:731769293567:web:c6a0a41f39f635179e9aca",
    measurementId: "G-VE44JEJX7W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
