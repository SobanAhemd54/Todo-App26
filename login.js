// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

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

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let todomain = document.getElementById('todomain');
    let loginmain = document.getElementById('loginmain');
    // Sign in the user with email and password
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log('User logged in successfully:', user);
            alert('User logged in successfully!');
            window.location.href = 'Todo.html';
            // Redirect to home page or wherever needed
            // window.location.href = 'index.html';
        })
        .catch((error) => {
            var errorMessage = error;
            console.error('Login failed:', errorMessage);
            alert(errorMessage);
        });
});
