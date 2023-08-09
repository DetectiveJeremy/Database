import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push } from "firebase/database";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "your key I removed mine for privacy reasons",
  authDomain: "personalresume-e494c.firebaseapp.com",
  databaseURL: "https://personalresume-e494c-default-rtdb.firebaseio.com",
  projectId: "personalresume-e494c",
  storageBucket: "personalresume-e494c.appspot.com",
  messagingSenderId: "880804873170",
  appId: "1:880804873170:web:7c8e5cb3f872be3582fe0b",
  measurementId: "G-QZC6SV07X5"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Contact.html variables that I will link to the firebase
const btnInput = document.getElementById("btn");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const reasonInput = document.getElementById("reasonforreachingout");
//
function dataBaseUpload(event)
{
    event.preventDefault();
const data = {
    name: nameInput.value,
    email: emailInput.value,
    reason: reasonInput.value
               }

    push(ref(database), data);
    nameInput.value = ""
    emailInput.value = ""
    reasonInput.value = "" 
}
const form = document.getElementById("formm"); 
form.addEventListener("submit", dataBaseUpload);

//resume stuff
let resumeBtn = document.getElementById("resumebtn")
let resumeDiv = document.getElementById("resumediv")
// Projects stuff
let projectsBtn = document.getElementById("projectsbtn")
let projectsDiv = document.getElementById("projectsdiv");
// hide
let none = document.getElementsByClassName("nonere")



resumeBtn.addEventListener("click", () => {
projectsDiv.style.display = "none"
resumeDiv.style.display = "block"
})

projectsBtn.addEventListener('click', () => {

resumeDiv.style.display = "none"
projectsDiv.style.display = "block"
})
