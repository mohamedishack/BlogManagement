// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-36a64.firebaseapp.com",
  projectId: "mern-blog-36a64",
  storageBucket: "mern-blog-36a64.appspot.com",
  messagingSenderId: "761848871238",
  appId: "1:761848871238:web:c9329af85730a942670d47"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);