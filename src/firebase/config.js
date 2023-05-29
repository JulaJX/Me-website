import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDWd9KmUIsD9TizWBIGm51m5LtIUZtm5eE",
    authDomain: "portfolio-website-f36b0.firebaseapp.com",
    projectId: "portfolio-website-f36b0",
    storageBucket: "portfolio-website-f36b0.appspot.com",
    messagingSenderId: "96482928770",
    appId: "1:96482928770:web:d2f4503c740f942235ec9b",
    measurementId: "G-JYVDYCKTYM"
  };

//init fbase
firebase.initializeApp(firebaseConfig);

//init services

const projectFirestore = firebase.firestore();

export { projectFirestore }