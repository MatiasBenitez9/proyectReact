import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCekWc4il5HNw0fUWKXl3lbwBwIbYEL1yk",
  authDomain: "oesteshop-e1158.firebaseapp.com",
  projectId: "oesteshop-e1158",
  storageBucket: "oesteshop-e1158.appspot.com",
  messagingSenderId: "33262855658",
  appId: "1:33262855658:web:b6f6a1da9ff4e986f93e93"
};
// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

