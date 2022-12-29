// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlaVopqfbi3_f4e1skH82fV6DJPT1R72U",
  authDomain: "project-1-8beec.firebaseapp.com",
  databaseURL: "https://project-1-8beec-default-rtdb.firebaseio.com",
  projectId: "project-1-8beec",
  storageBucket: "project-1-8beec.appspot.com",
  messagingSenderId: "680546916498",
  appId: "1:680546916498:web:618204c74aa0a184546e4b",
  measurementId: "G-3SZEEG2E3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const Database = getDatabase();



var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var contact = document.getElementById("contact");
var cnic = document.getElementById("cnic");
var password = document.getElementById("password");
var course = document.getElementById("course");
var Qualification = document.getElementById("Qualification");

var obj = {
 firstname: firstname.value,
 lastname: lastname.value,
 contact: contact.value,
 cnic: cnic.value,
 password: password.value,
 course: course.value,
 Qualification: Qualification.value,
};
 window.location();function submit(){
    console.log(obj);
};
submit();