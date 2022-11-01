import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBsZw5r_5bkE6xc1hFQg1YfMjLy0Xc8XKM",
  authDomain: "proyecto-universidad-d6f17.firebaseapp.com",
  projectId: "proyecto-universidad-d6f17",
  storageBucket: "proyecto-universidad-d6f17.appspot.com",
  messagingSenderId: "47495261714",
  appId: "1:47495261714:web:fe8d8bd952046ca5fdf2cb"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);