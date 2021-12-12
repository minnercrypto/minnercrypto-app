var firebaseConfig = {
  apiKey: "AIzaSyAss3dgdjSiGzTkoa_MF-pvCA5PK-I6IUg",
  authDomain: "minnercryptopage-864ee.firebaseapp.com",
  databaseURL: "https://minnercryptopage-864ee-default-rtdb.firebaseio.com",
  projectId: "minnercryptopage-864ee",
  storageBucket: "minnercryptopage-864ee.appspot.com",
  messagingSenderId: "856037283154",
  appId: "1:856037283154:web:3cf8e5678c3a0c20d0d68b",
  measurementId: "G-8M0846V6WS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();
