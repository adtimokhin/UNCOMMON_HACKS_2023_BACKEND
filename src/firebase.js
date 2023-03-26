// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGeDems4Em1ydyhTx2zEAvK5R7ONfThLQ",
  authDomain: "events-4e304.firebaseapp.com",
  projectId: "events-4e304",
  storageBucket: "events-4e304.appspot.com",
  messagingSenderId: "878230429229",
  appId: "1:878230429229:web:8c09cec45b162873ca22a4"
};

const admin = require('./node_modules/firebase-admin');
const serviceAccount = require("./serviceAccount.json");
const { initializeApp } = require("firebase-admin/app");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: ""
});
// Initialize Firebase
const app = initializeApp(firebaseConfig);