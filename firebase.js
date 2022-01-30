import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyChnGu8nSzPPoqs3e7u_LfVJfeq7Bxn6Wk",
  authDomain: "chat-app-d2698.firebaseapp.com",
  projectId: "chat-app-d2698",
  storageBucket: "chat-app-d2698.appspot.com",
  messagingSenderId: "466219755608",
  appId: "1:466219755608:web:1d0eeb3c4dff5ccca1422d",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
