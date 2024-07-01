import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAZ-O7AY0FaL1UGxShinTF6RoZ2_XhkpP0",
  authDomain: "trab-prog-web-2dfd5.firebaseapp.com",
  databaseURL: "https://trab-prog-web-2dfd5-default-rtdb.firebaseio.com",
  projectId: "trab-prog-web-2dfd5",
  storageBucket: "trab-prog-web-2dfd5.appspot.com",
  messagingSenderId: "327311494705",
  appId: "1:327311494705:web:5ab65fff31342f8335cf10",
  measurementId: "G-1J5HJ911BY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();