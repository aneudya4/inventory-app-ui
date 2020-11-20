import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyD31cyGkA0j9eeBEw4sHfMUlL_eDb9Lx1o',
  authDomain: 'inventory-63496.firebaseapp.com',
  databaseURL: 'https://inventory-63496.firebaseio.com',
  projectId: 'inventory-63496',
  storageBucket: 'inventory-63496.appspot.com',
  messagingSenderId: '449277922637',
  appId: '1:449277922637:web:f90ce6c33c38ffb95cfb04',
  measurementId: 'G-MSMNVKWKTP',
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_SENDERID,
});
export default app;
