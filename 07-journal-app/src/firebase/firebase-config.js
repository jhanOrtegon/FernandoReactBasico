import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDbe-ZwHHFqqFSJyPS1rBJjkddO-ABCozQ",
    authDomain: "journalapp-8d95b.firebaseapp.com",
    projectId: "journalapp-8d95b",
    storageBucket: "journalapp-8d95b.appspot.com",
    messagingSenderId: "16119959258",
    appId: "1:16119959258:web:c05e515547f8c2ad6e1fe3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db, googleAuthProvider, firebase
}