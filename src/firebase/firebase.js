import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBmHzY1U2qJ7ey6_XhMI79YMlbWyUMZu-s",
  authDomain: "africann-demo.firebaseapp.com",
  databaseURL: "https://africann-demo.firebaseio.com",
  projectId: "africann-demo",
  storageBucket: "africann-demo.appspot.com",
  messagingSenderId: "951938607325",
  appId: "1:951938607325:web:9f683b8b35c16f84f49334",
  measurementId: "G-M5XFSH4RFP",
};

export const fire = firebase.initializeApp(firebaseConfig);
export const db = fire.firestore();
