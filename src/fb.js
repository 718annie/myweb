import * as firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyC3GPWPsTqC1JYTXtmm09D5eQmbLW0LNoY",
    authDomain: "copycat-web.firebaseapp.com",
    databaseURL: "https://copycat-web.firebaseio.com",
    projectId: "copycat-web",
    storageBucket: "copycat-web.appspot.com",
    messagingSenderId: "840966837908",
    appId: "1:840966837908:web:845b214ef7bcf4e5dac681",
    measurementId: "G-R218K4228W"

  }

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const db = firebase.firestore()

export {auth, db}
