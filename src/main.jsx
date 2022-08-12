import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAOOchihOB6fmmr05oibJh7mEWSx0hfFpw",
  authDomain: "akumaluniformes.firebaseapp.com",
  projectId: "akumaluniformes",
  storageBucket: "akumaluniformes.appspot.com",
  messagingSenderId: "446071242746",
  appId: "1:446071242746:web:b22f9fb6f25b205dc06e43"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // {/* </React.StrictMode> */}
)
