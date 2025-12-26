// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ9cYtkM3MKfM8cP3KbSo6yaUiD-sO56I",
  authDomain: "cadcraftapp.firebaseapp.com",
  projectId: "cadcraftapp",
  storageBucket: "cadcraftapp.firebasestorage.app",
  messagingSenderId: "601897701974",
  appId: "1:601897701974:web:a48f517a76bd02284561f7",
  measurementId: "G-FX0SWF8KY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);