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

// Observable Email
const txtEmail = observable({
  name : 'email',
  value : ''
});

// Observable Password
const txtPassword = observable({
  name : 'password',
  value : ''
});

//Register
const registerEmailPass = function() {
  const promise = auth.createUserWithEmailAndPassword(txtEmail.value, txtPassword.value);
  promise.catch(e => console.log(e.message));
  // console.log('hi there');
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


export { txtEmail, txtPassword, registerEmailPass };
