import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './_base.scss';
import store from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

import firebase from 'firebase/app'; // Import only the base Firebase module
import 'firebase/auth';
import { createRoot } from 'react-dom/client'; // Update import statement
import 'react-lazy-load-image-component/src/effects/blur.css';

const firebaseConfig = {
    apiKey: "AIzaSyBLGvTWhe4pAphD5nTjQAl5taH04Pf0zKc",
    authDomain: "yt-clone-2002.firebaseapp.com",
    projectId: "yt-clone-2002",
    storageBucket: "yt-clone-2002.appspot.com",
    messagingSenderId: "53070863525",
    appId: "1:53070863525:web:fbf297525501d3f0e9014c"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
