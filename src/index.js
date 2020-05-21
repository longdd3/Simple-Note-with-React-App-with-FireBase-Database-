import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const firebase = require('firebase');
require('firebase/firestore');
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCvMsV7FyKAmxPDzlV225sl0tmc5K9SwEA",
  authDomain: "note-clone-647e5.firebaseapp.com",
  databaseURL: "https://note-clone-647e5.firebaseio.com",
  projectId: "note-clone-647e5",
  storageBucket: "note-clone-647e5.appspot.com",
  messagingSenderId: "182970329143",
  appId: "1:182970329143:web:9a1e2957debe99766ff7b2",
  measurementId: "G-MTNHEXTX4K"
};
// Initialize Firebase
firebase.initializeApp({

    apiKey: "AIzaSyCvMsV7FyKAmxPDzlV225sl0tmc5K9SwEA",
    authDomain: "note-clone-647e5.firebaseapp.com",
    databaseURL: "https://note-clone-647e5.firebaseio.com",
    projectId: "note-clone-647e5",
    storageBucket: "note-clone-647e5.appspot.com",
    messagingSenderId: "182970329143",
    appId: "1:182970329143:web:9a1e2957debe99766ff7b2",
    measurementId: "G-MTNHEXTX4K"
  });
firebase.analytics()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
