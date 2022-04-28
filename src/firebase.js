// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9PB5Wp6n1TkVJOXult5j4flay_YNenGA",
  authDomain: "netflix-clone-ea4dc.firebaseapp.com",
  projectId: "netflix-clone-ea4dc",
  storageBucket: "netflix-clone-ea4dc.appspot.com",
  messagingSenderId: "889247137381",
  appId: "1:889247137381:web:8c2382e772970b8266908c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {auth};
export default db;



