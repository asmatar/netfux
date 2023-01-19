import { getAuth } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp,  } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_TB9WmmPjgG5FmwfVrkU8hHFcGCAV2jE",
  authDomain: "netflux-65ac9.firebaseapp.com",
  projectId: "netflux-65ac9",
  storageBucket: "netflux-65ac9.appspot.com",
  messagingSenderId: "577159114427",
  appId: "1:577159114427:web:8345b3d874b0aed727439e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth()

export {auth}
export default db;

