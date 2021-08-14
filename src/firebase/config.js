import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDhOQJ-HYhIPrldM3yq-kgQUBfEzkocpi0",
    authDomain: "ayoub-gallery.firebaseapp.com",
    projectId: "ayoub-gallery",
    storageBucket: "ayoub-gallery.appspot.com",
    messagingSenderId: "836434927399",
    appId: "1:836434927399:web:39b0b152e3e05215f51302",
    measurementId: "G-HJS0Q2S465"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//create storage
  const projectstorage = firebase.storage();
  //create store
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectstorage , projectFirestore , timestamp };
