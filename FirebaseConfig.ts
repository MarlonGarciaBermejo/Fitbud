import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA3kP9lc80bTghBdXaOdmthuvO7YZ53B4o",
  authDomain: "fitbud-a8de5.firebaseapp.com",
  projectId: "fitbud-a8de5",
  storageBucket: "fitbud-a8de5.appspot.com",
  messagingSenderId: "62654382305",
  appId: "1:62654382305:web:af0ed481dcdac6865c37a0",
  measurementId: "G-PJBB65XVK4",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
