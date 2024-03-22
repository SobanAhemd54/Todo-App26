// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDs6eWSXnV_pO_4-kk13iiT-kCjjF_S440",
    authDomain: "todo-app-2a64f.firebaseapp.com",
    databaseURL: "https://todo-app-2a64f-default-rtdb.firebaseio.com",
    projectId: "todo-app-2a64f",
    storageBucket: "todo-app-2a64f.appspot.com",
    messagingSenderId: "34940051663",
    appId: "1:34940051663:web:fdeb1a10ef4a2af01817ba"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Register the user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log('User registered successfully:', user);
            alert('User registered successfully!');
            // Redirect to login page
            window.location.href = 'index.html';
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.error('Registration failed:', errorMessage);
            alert(errorMessage);
        });
});
