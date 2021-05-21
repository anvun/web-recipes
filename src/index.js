import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/css/index.css';
import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp(
  {
    apiKey: "AIzaSyAv9BA9pksl3-0-Uw6IjCI5o2kVvSarCP0",
    authDomain: "web-recipes-f73ed.firebaseapp.com",
    projectId: "web-recipes-f73ed",
    storageBucket: "web-recipes-f73ed.appspot.com",
    messagingSenderId: "1045337023007",
    appId: "1:1045337023007:web:2c5a838f7f7f692bf82b2a",
    measurementId: "G-6NMM5NXY9X"
  }
);

export const Context = createContext(null)
const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
