import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

//Take these values from Firebase console. Deleted these for security reasons.

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
