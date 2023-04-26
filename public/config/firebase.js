// Import the functions you need from the SDKs you neefi
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
console.log('estoy config firebase ',firebaseConfig)


const db = getFireStore(app);

export default db;