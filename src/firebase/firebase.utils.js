import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBum5ZND3rY8pi2AF6431PKjSE1qdoNDhs",
  authDomain: "crwn-db-dee4e.firebaseapp.com",
  databaseURL: "https://crwn-db-dee4e.firebaseio.com",
  projectId: "crwn-db-dee4e",
  storageBucket: "",
  messagingSenderId: "132136040696",
  appId: "1:132136040696:web:d486a7bf9068515c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;