import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB211U45JilxqsZ638n20sPk2d5nvZXKp4',
  authDomain: 'react-native-auth-dc25f.firebaseapp.com',
  databaseURL: 'https://react-native-auth-dc25f.firebaseio.com/',
  projectId: 'react-native-auth-dc25f',
  storageBucket: 'react-native-auth-dc25f.appspot.com',
  messagingSenderId: '165056095630',
  appId: '1:165056095630:android:6afaad6b557c0b6b22f0df',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
