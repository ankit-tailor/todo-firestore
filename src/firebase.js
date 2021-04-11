import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";

firebase.initializeApp({
  apiKey: "AIzaSyDju_lBGo0zPsgdTmr0KBqxeO8nr30yjUQ",
  authDomain: "todo-app-21e86.firebaseapp.com",
  projectId: "todo-app-21e86",
  storageBucket: "todo-app-21e86.appspot.com",
  messagingSenderId: "650209179538",
  appId: "1:650209179538:web:ab412efa9160ec4302f34b",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();

export default firebase;
