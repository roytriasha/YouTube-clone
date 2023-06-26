import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBLGvTWhe4pAphD5nTjQAl5taH04Pf0zKc",
  authDomain: "yt-clone-2002.firebaseapp.com",
  projectId: "yt-clone-2002",
  storageBucket: "yt-clone-2002.appspot.com",
  messagingSenderId: "53070863525",
  appId: "1:53070863525:web:fbf297525501d3f0e9014c",
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()