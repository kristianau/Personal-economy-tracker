// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-GX8CXI6BYgq0c6oYePWJqEr6vPL2fis",
    authDomain: "economy-tracker-a9b7f.firebaseapp.com",
    projectId: "economy-tracker-a9b7f",
    storageBucket: "economy-tracker-a9b7f.appspot.com",
    messagingSenderId: "629210728447",
    appId: "1:629210728447:web:4ecaa4ccca0f34150ec9ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);