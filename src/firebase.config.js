// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1XnT80JN1-mQiv8VaUzvfv54rn4qS5Ao",
  authDomain: "job-search-portal-ddb29.firebaseapp.com",
  projectId: "job-search-portal-ddb29",
  storageBucket: "job-search-portal-ddb29.firebasestorage.app",
  messagingSenderId: "731045421633",
  appId: "1:731045421633:web:0744ffa8e53ff976109cc0",
  measurementId: "G-XNB5ZMJEQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db, app, analytics };