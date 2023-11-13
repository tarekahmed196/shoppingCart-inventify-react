// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4sXHICdY2Dp3RHQseCKne-MxgSkhPsAc",
  authDomain: "inventify-shopping-with-auth.firebaseapp.com",
  projectId: "inventify-shopping-with-auth",
  storageBucket: "inventify-shopping-with-auth.appspot.com",
  messagingSenderId: "690525511397",
  appId: "1:690525511397:web:02a02334348f622ad6fe0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;