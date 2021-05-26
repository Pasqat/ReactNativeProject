import firebase from "firebase/app";
import "firebase/auth";

export const loginRequest = (email, password) =>
  firebase.auth.signInWithEmailAndPassword(email, password);
