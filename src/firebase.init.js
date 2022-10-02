// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC90wiREZg65qYH34FyjGx16txQHZxj8XE",
    authDomain: "red-onion-f549b.firebaseapp.com",
    projectId: "red-onion-f549b",
    storageBucket: "red-onion-f549b.appspot.com",
    messagingSenderId: "715731658127",
    appId: "1:715731658127:web:29c9b9e8ac5c6fc9ec57fa",
    measurementId: "G-LC5NC1F5FS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
