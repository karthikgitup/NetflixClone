// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAIcaGOUbZAX_fjEP2UVLzC9jY2CT050WE",
  authDomain: "netflixx-d155d.firebaseapp.com",
  projectId: "netflixx-d155d",
  storageBucket: "netflixx-d155d.appspot.com",
  messagingSenderId: "921683911946",
  appId: "1:921683911946:web:a77b1a7d52c5bc92fb86f3",
  measurementId: "G-JXT91M0CQE"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db=getFirestore();
export {app,auth,db};
