importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
   apiKey: "AIzaSyBcFOZHvFREX_rFJ1fVo_ALVDAD1tKsqEY",
   authDomain: "virtual-van-sales-30c5f.firebaseapp.com",
   databaseURL: "https://virtual-van-sales-30c5f.firebaseio.com",
   projectId: "virtual-van-sales-30c5f",
   storageBucket: "virtual-van-sales-30c5f.appspot.com",
   messagingSenderId: "378872057217",
   appId: "1:378872057217:web:c0f8809e133836b5fc2c80",
   measurementId: "G-8ZDF54595W",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();