 import firebase from 'firebase';
 import firestore from 'firebase/firestore';
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBTKk8ZYPc6_lRtXigtI7IAsAR1YYUdFBM",
    authDomain: "geo-ninja-7adea.firebaseapp.com",
    databaseURL: "https://geo-ninja-7adea.firebaseio.com",
    projectId: "geo-ninja-7adea",
    storageBucket: "",
    messagingSenderId: "834694351244",
    appId: "1:834694351244:web:62d985bd97ce29f5"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore();