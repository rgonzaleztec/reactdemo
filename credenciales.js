// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3aXoKwBQsUK7KK-g8Yjy2qwiVIwQjiAA",
  authDomain: "applayers-741fb.firebaseapp.com",
  databaseURL: "https://applayers-741fb-default-rtdb.firebaseio.com",
  projectId: "applayers-741fb",
  storageBucket: "applayers-741fb.appspot.com",
  messagingSenderId: "19424008532",
  appId: "1:19424008532:web:1eb6acd898e0da82a610c1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp