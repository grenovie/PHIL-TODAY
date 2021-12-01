import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCdXn5sBTht8pVc4bdCNuKnD8F9jUwZS4g",
  authDomain: "philtoday-auth.firebaseapp.com",
  projectId: "philtoday-auth",
  storageBucket: "philtoday-auth.appspot.com",
  messagingSenderId: "875154401033",
  appId: "1:875154401033:web:b35466b22b6ab8d04d15d8",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
