// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIza…Z2Xo",
  authDomain: "the-intermural-league.firebaseapp.com",
  projectId: "the-intermural-league",
  storageBucket: "the-intermural-league.appspot.com",
  messagingSenderId: "584115553606",
  appId: "1:584115553606:web:17e5d902c1647ed93c9147",
  measurementId: "G-XWL4BF12XQ"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);