import firebase from "firebase";
import "firebase/auth";

export const auth =firebase.initializeApp( {
    apiKey: "AIzaSyDUiFtE6A0oR_MWVvKHBpaVez6KxkwDyUs",
    authDomain: "chatman-424c6.firebaseapp.com",
    projectId: "chatman-424c6",
    storageBucket: "chatman-424c6.appspot.com",
    messagingSenderId: "1067936611559",
    appId: "1:1067936611559:web:d2d72caee2d5c0e3283642"
  }).auth();