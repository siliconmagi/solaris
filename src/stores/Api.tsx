import { observable } from 'mobx';
// import appConfig from '../config';
import * as firebase from "firebase";

// initialize Firebase
const config = {
  apiKey: "AIzaSyAq8yCB1vZHYksZ49YBfhPnHkpDpLXXDsw",
  authDomain: "nightshell-4158f.firebaseapp.com",
  databaseURL: "https://nightshell-4158f.firebaseio.com",
  storageBucket: "nightshell-4158f.appspot.com",
  messagingSenderId: "1015163981984"
};
firebase.initializeApp(config);
const auth = firebase.auth();

// Text Email
const txtEmail = observable({
  name : 'email',
  value : ''
});

// Text Password
const txtPassword = observable({
  name : 'password',
  value : ''
});

// Handle Error
const handleError = (e) => {
  errorMessage.value = e.message;
  errorMessage.disabled = true;
  setTimeout(function() {
    errorMessage.value = '';
    errorMessage.disabled = false;
  }, 3000);
}

// Error Object
const errorMessage = observable({
  value : '',
  disabled: false
});

// Email Sign up
const emailSignUp = () => {
  const promise = auth.createUserWithEmailAndPassword(txtEmail.value, txtPassword.value);
  promise.catch(e => handleError(e));
}

// Login
const login = () => {
  if (isLoggedIn.value) {
    errorMessage.value = 'Already logged in!';
    errorMessage.disabled = true;
    setTimeout(function() {
      errorMessage.value = '';
      errorMessage.disabled = false;
    }, 3000);
  } else {
    const promise = auth.signInWithEmailAndPassword(txtEmail.value, txtPassword.value);
    promise.catch(e => handleError(e));
  }
}

const isLoggedIn = observable({
  value: false
});

// Logout
const logout = () => {
  firebase.auth().signOut();
}

// Auth listener
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser) {
    isLoggedIn.value = true;
  } else {
    isLoggedIn.value = false;
  }
})

export { txtEmail, txtPassword, emailSignUp, login, logout, isLoggedIn, errorMessage };
