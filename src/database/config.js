import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyC3k1bczJlN2vuPakL4Vi3XAuqdzfHUwkg",
  authDomain: "photogallery-1370e.firebaseapp.com",
  databaseURL: "https://photogallery-1370e.firebaseio.com",
  projectId: "photogallery-1370e",
  storageBucket: "photogallery-1370e.appspot.com",
  messagingSenderId: "878606366922",
  appId: "1:878606366922:web:d6b4e7f4b08f35a5d41c33"
};

firebase.initializeApp(firebaseConfig)

export const database = firebase.database()
