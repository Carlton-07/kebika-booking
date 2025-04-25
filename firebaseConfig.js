
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAxVUCa_fsbUvTgoX9uj8ZnJAUsbENt1VE",
    authDomain: "kebika-booking.firebaseapp.com",
    projectId: "kebika-booking",
    storageBucket: "kebika-booking.firebasestorage.app",
    messagingSenderId: "25275426431",
    appId: "1:25275426431:web:5d7aff234408231f07014a",
    measurementId: "G-9C17YQDJCL"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
