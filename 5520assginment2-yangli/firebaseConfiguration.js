import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5nbRlEo8lTVE2Fqx-243yo9OBGyOqQ28",
  authDomain: "assignment2-cf6a2.firebaseapp.com",
  databaseURL: "https://assignment2-cf6a2-default-rtdb.firebaseio.com/",
  projectId: "assignment2-cf6a2",
  storageBucket: "assignment2-cf6a2.appspot.com",
  messagingSenderId: "303096111947",
  appId: "1:303096111947:web:f4852c61249454a8e37ece",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
