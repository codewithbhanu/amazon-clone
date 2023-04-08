// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDxKquWMnMd8WzY3D-XS9t8sH-8TvznOXA",
    authDomain: "challenge-c002c.firebaseapp.com",
    databaseURL: "https://challenge-c002c.firebaseio.com",
    projectId: "challenge-c002c",
    storageBucket: "challenge-c002c.appspot.com",
    messagingSenderId: "935906441156",
    appId: "1:935906441156:web:48b7ab4a7937ee30b85691",
    measurementId: "G-DRR4JP9HJT"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };