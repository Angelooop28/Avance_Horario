import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDf6kmYxbbuh8294c4rPIxgfRZa3Fr_lpY",
    authDomain: "sistema-de-horario.firebaseapp.com",
    projectId: "sistema-de-horario",
    storageBucket: "sistema-de-horario.appspot.com",
    messagingSenderId: "722520416593",
    appId: "1:722520416593:web:3399d76e8ccddc46f23370",
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Util
  const auth = firebase.auth();

  //Exports
  export { auth };