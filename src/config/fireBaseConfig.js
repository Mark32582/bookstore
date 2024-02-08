// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { firestore, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkNs9nC0ke4iu2zt9AYuarZABFk2HqbXw",
  authDomain: "whateveriwant-49607.firebaseapp.com",
  projectId: "whateveriwant-49607",
  storageBucket: "whateveriwant-49607.appspot.com",
  messagingSenderId: "424426528308",
  appId: "1:424426528308:web:d09a164231ccaedf2cb461",
  measurementId: "G-V9BFVJ01EL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

