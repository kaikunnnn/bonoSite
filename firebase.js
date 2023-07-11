import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA61sGj5t6d4qY5uubC--Ns-n4sTbiueQE",
  authDomain: "bono-fc42f.firebaseapp.com",
  projectId: "bono-fc42f",
  storageBucket: "bono-fc42f.appspot.com",
  messagingSenderId: "637812170207",
  appId: "1:637812170207:web:989cc111ed4fd79cd8b86a",
  measurementId: "G-CFJZN8L7LE"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};


// import {initializeApp} from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// import {getAuth} from "firebase/auth"
// import { GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyA61sGj5t6d4qY5uubC--Ns-n4sTbiueQE",
//   authDomain: "bono-fc42f.firebaseapp.com",
//   projectId: "bono-fc42f",
//   storageBucket: "bono-fc42f.appspot.com",
//   messagingSenderId: "637812170207",
//   appId: "1:637812170207:web:989cc111ed4fd79cd8b86a",
//   measurementId: "G-CFJZN8L7LE"
// }

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);

// // Authentication
// const auth = getAuth(app)
// const provider = new GoogleAuthProvider()

// export {db, auth, provider};