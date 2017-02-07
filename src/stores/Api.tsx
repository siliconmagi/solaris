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
  }, 5000);
}

// Error Observable
const errorMessage = observable({
  value : '',
  disabled: false
});

// Register Promise
const registerEmailPass = () => {
  const promise = auth.createUserWithEmailAndPassword(txtEmail.value, txtPassword.value);
  promise.catch(e => handleError(e));
}

// Sign In
// const email = txtEmail.value;
// const pass = txtPassword.value;
// const auth = firebase.auth();
// const promise = auth.createUserWithEmailAndPassword(txtEmail, txtPassword);
// promise.catch(e => console.log(e.message));

// Sign In
// const promise = auth.signInWithEmailAndPassword(txtEmail, txtPassword);
// promise.catch(e => console.log(e.message));


export { txtEmail, txtPassword, registerEmailPass, errorMessage };
