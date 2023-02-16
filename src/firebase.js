// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHpQZ0Y6_F5endDW7QltXqtFwkkr0Awt4",
  authDomain: "demofirebase-15d24.firebaseapp.com",
  projectId: "demofirebase-15d24",
  storageBucket: "demofirebase-15d24.appspot.com",
  messagingSenderId: "219540395782",
  appId: "1:219540395782:web:6e661295635a1719c03087"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Firestore
const db = getFirestore(app)
// Initialize Auth
const auth = getAuth(app)

export { db, auth }