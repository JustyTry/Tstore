
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAhENPdbQSq3KB2Ay3invJX943eadlySeM",
    authDomain: "localhost",
    projectId: "tstore-42aab",
    storageBucket: "tstore-42aab.appspot.com",
    messagingSenderId: "943088933898",
    appId: "1:943088933898:web:da9e26d0daca2a1b81d3f3",
    measurementId: "G-MQVDNRZYDP"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db }