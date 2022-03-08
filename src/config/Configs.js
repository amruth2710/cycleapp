import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
        apiKey: "AIzaSyBdUMbWWnahacXeeETSq8YGAHmLlyQs4O4",
        authDomain: "fir-crud-f0a4a.firebaseapp.com",
        projectId: "fir-crud-f0a4a",
        storageBucket: "fir-crud-f0a4a.appspot.com",
        messagingSenderId: "394863590196",
        appId: "1:394863590196:web:6ec8a2acb7573693748361",
        measurementId: "G-99YC6CYNKL"
      };
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth, fs,storage};