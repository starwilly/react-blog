import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
};

const firestoreSettings = { timestampsInSnapshots: true };

firebase.initializeApp(config);

const auth = firebase.auth();
const firestore = firebase.firestore();
firestore.settings(firestoreSettings);

export { firebase, firestore, auth };
