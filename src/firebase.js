//jshint esversion:6

import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "sanadwebdev.firebaseapp.com",
  databaseURL: "https://sanadwebdev.firebaseio.com",
  projectId: "sanadwebdev",
  storageBucket: "sanadwebdev.appspot.com",
  messagingSenderId: "889682675168",
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-B329KRT4EJ"
};

// initialize firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);
// create our storage access
// const db = firebaseApp.firestore();


export default firebaseApp;