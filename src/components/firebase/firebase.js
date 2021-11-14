// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import {useState, useEffect} from 'react'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT4NZF_rdcb-nz_B-xZHhL26q75uHxQnA",
  authDomain: "otp-verify-a2e17.firebaseapp.com",
  databaseURL: "https://otp-verify-a2e17-default-rtdb.firebaseio.com",
  projectId: "otp-verify-a2e17",
  storageBucket: "otp-verify-a2e17.appspot.com",
  messagingSenderId: "948060799296",
  appId: "1:948060799296:web:e22593295f4a9d32897aa5"
};

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const signup = (eamil, password) => {
  return createUserWithEmailAndPassword(auth, eamil, password);
}
export const login = (eamil, password) => {
  return signInWithEmailAndPassword(auth, eamil, password);
}


//custom hook
export const useAuth = () => {
  const [ currentUser, setCurrentUser ] = useState()

  useEffect(() => {
    const unsub =  onAuthStateChanged(auth, user => setCurrentUser(user))
    return unsub
  })

  return currentUser;
}

export function logout() {
  signOut(auth)
}