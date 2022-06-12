import {initializeApp } from 'firebase/app';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyANYZBh9BoJQUCblI2YCUphypvXf1G9HjA",
    authDomain: "calm-metric-339919.firebaseapp.com",
    databaseURL: "https://calm-metric-339919-default-rtdb.firebaseio.com/",
    projectId: "calm-metric-339919",
    storageBucket: "calm-metric-339919.appspot.com",
    messagingSenderId: "241803207621",
    appId: "1:241803207621:web:aee4ad38a3443de950a1ac",
    measurementId: "G-0VKVSNYR58"
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getDatabase(app);