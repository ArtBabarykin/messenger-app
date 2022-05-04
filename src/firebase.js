import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDCWYJq-429HrkR5aAKrUTgBfnDdthzBqY",
  authDomain: "facebook-messenger-clone-1a4ed.firebaseapp.com",
  projectId: "facebook-messenger-clone-1a4ed",
  storageBucket: "facebook-messenger-clone-1a4ed.appspot.com",
  messagingSenderId: "258003605341",
  appId: "1:258003605341:web:e7b9c15889fb3c768efab4",
});

const db = firebaseApp.firestore();

export default db;
