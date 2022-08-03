// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjxFQ5en6EVRAUt9ZuRa4N6X4gieUSbd0",
  authDomain: "genius-car-service-f207f.firebaseapp.com",
  projectId: "genius-car-service-f207f",
  storageBucket: "genius-car-service-f207f.appspot.com",
  messagingSenderId: "198151383711",
  appId: "1:198151383711:web:3abd7b81dc33115e2390aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;