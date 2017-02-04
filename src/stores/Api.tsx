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

// Observable Email
const UserEmail = observable({
  Name : 'email',
  Value : ''
});

// Observable Password
const UserPassword = observable({
  Name : 'password',
  Value : ''
});


export { UserEmail, UserPassword };

