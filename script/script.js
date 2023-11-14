import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCkAY7Cw2vX8r8prZzIOU-MIrZyVfE5fkE",
    authDomain: "todo-website-7c70e.firebaseapp.com",
    projectId: "todo-website-7c70e",
    storageBucket: "todo-website-7c70e.appspot.com",
    messagingSenderId: "1072411639484",
    appId: "1:1072411639484:web:0b1124be2faaaf0a2cdab9",
    measurementId: "G-V04XHD1CVG"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth();

// login Inputs
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
const submitButton = document.getElementById("submit")

// Register Input
const SignupEmail = document.getElementById("email-signup")
const confirmsignupEmailIn = document.getElementById("confirm-email-signup")
const confirmsignupPassword = document.getElementById("password-signup")
const confirmSignupPasswordIn = document.getElementById("confirm-password-signup")
const createAccBtn = document.getElementById("create-Acc-signup")


// login / Register navigation variables
const signupButton = document.getElementById("sign-up");
const returnBtn = document.getElementById("return-btn");
const createacc = document.getElementById("create-acct");
const main = document.getElementById("main");

let email, password, signupEmail, signupPassword, confirmSignupEmail, confirmSignupPassword;


// login / Register navigation functionality
signupButton.addEventListener("click", () => {
    main.style.display = "none";
    createacc.style.display = "block";
});

returnBtn.addEventListener ("click", () => {
    main.style.display = "block";
    createacc.style.display = "none";
});
