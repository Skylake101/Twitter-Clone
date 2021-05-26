import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXqY9XZNXZ1mrlgz0Is68h4sRXp2Vb3SU",
  authDomain: "twitter-clone-99258.firebaseapp.com",
  projectId: "twitter-clone-99258",
  storageBucket: "twitter-clone-99258.appspot.com",
  messagingSenderId: "626478776936",
  appId: "1:626478776936:web:3aa39b509f8365394bf1dd",
  measurementId: "G-Q0TLZ7YYDB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;