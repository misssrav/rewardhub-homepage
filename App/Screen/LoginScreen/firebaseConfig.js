import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxd69lbEXslNSrv1vUl6f2SZ2ryf7AAvU",
  authDomain: "cprms-85c1a.firebaseapp.com",
  projectId: "cprms-85c1a",
  storageBucket: "cprms-85c1a.appspot.com",
  messagingSenderId: "571092056366",
  appId: "1:571092056366:web:785e049d0c62750aed62bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider(app);
