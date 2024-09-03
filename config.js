const { initializeApp } = require('firebase/app');
const { getFirestore, collection } = require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyDBrLjSPX5bhKOJ8RWbAdo1S4JfRlhop5o",
    authDomain: "test-1fd6c.firebaseapp.com",
    projectId: "test-1fd6c",
    storageBucket: "test-1fd6c.appspot.com",
    messagingSenderId: "128454055271",
    appId: "1:128454055271:web:31147514fbfd7744bd8bc2",
    measurementId: "G-Z9FE7N1291"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Reference the 'Users' collection
const User = collection(db, 'Users');

// Export the User collection reference
module.exports = User;
