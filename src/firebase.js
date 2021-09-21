// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIDIXSfMlPnY3IIZ35I1_y2eujvDHBMGY",
  authDomain: "reactjshost-31a92.firebaseapp.com",
  projectId: "reactjshost-31a92",
  storageBucket: "reactjshost-31a92.appspot.com",
  messagingSenderId: "309924866917",
  appId: "1:309924866917:web:84d5b1bd714a3e27b4cf8c",
  measurementId: "G-GCCGHEHB9H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);