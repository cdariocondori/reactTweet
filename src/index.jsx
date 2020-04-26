import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import Users from './components/users';

import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import firebase from 'firebase';

  firebase.initializeApp( {
    apiKey: "AIzaSyC3hwBi3bmHKeNus2sZgJ6ed8CYBukfBK4",
    authDomain: "react-tweet-2155a.firebaseapp.com",
    databaseURL: "https://react-tweet-2155a.firebaseio.com",
    projectId: "react-tweet-2155a",
    storageBucket: "react-tweet-2155a.appspot.com",
    messagingSenderId: "698762813385",
    appId: "1:698762813385:web:4c3c6b9ac66a10539b9218"
  });


const routing = (
  <Router>
    <div>
   
 
        <App/>


    </div>
  </Router>
);



render(routing, document.getElementById('root'))