var firebaseConfig = {
  apiKey: "AIzaSyCCo8t7JAXcqhe3CNK6dqsQWVU3QuZff6U",
  authDomain: "crypto-money-1d5f4.firebaseapp.com",
  projectId: "crypto-money-1d5f4",
  storageBucket: "crypto-money-1d5f4.appspot.com",
  messagingSenderId: "858203034619",
  appId: "1:858203034619:web:17a5350babea8acd53315e",
  measurementId: "G-NFH9K2S5P8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();
