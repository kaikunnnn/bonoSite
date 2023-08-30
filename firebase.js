// v9 compat packages are API compatible with v8 code
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

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};

