// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5hj2ewysX_5y3bdMBnBv0RbnMrT72huo",
  authDomain: "vividcare-hospital.firebaseapp.com",
  projectId: "vividcare-hospital",
  storageBucket: "vividcare-hospital.appspot.com",
  messagingSenderId: "813437751718",
  appId: "1:813437751718:web:ea256c6af863314c597f67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const hosSignup = (eamil, password) => {
  return createUserWithEmailAndPassword(auth, eamil, password);
}
export const hosLogin = (eamil, password) => {
  return signInWithEmailAndPassword(auth, eamil, password);
}

//custom hook
export const hosuseAuth = () => {
  const [ currentUser, setCurrentUser ] = useState('default')

  useEffect(() => {
    const unsub =  onAuthStateChanged(auth, user => setCurrentUser(user))
    return unsub
  })

  return currentUser;
}

export function hosLogout() {
  signOut(auth)
}

//database starts here
const db = getFirestore();
export const hosEnterdata = async(name, phone, regId) => {
  try {
    const docRef = await addDoc(collection(db, "hospitalDB"), {
      name: name,
      phone: phone,
      regId: regId
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}