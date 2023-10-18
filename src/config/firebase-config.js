// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0JcfkZj7Hwv28JsjV1xM7lpEkQm7L-LM",
  authDomain: "expense-tracker-c3ec8.firebaseapp.com",
  projectId: "expense-tracker-c3ec8",
  storageBucket: "expense-tracker-c3ec8.appspot.com",
  messagingSenderId: "1090428723154",
  appId: "1:1090428723154:web:c6b22cac4ee7dc9c43f20b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)

//firebase login
//firebase init
//firebase deploy