// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABSKoF3s0NLEgosaCCJrE99imoXXX8Grc",
  authDomain: "realtor-clone-react-88749.firebaseapp.com",
  projectId: "realtor-clone-react-88749",
  storageBucket: "realtor-clone-react-88749.appspot.com",
  messagingSenderId: "287565748318",
  appId: "1:287565748318:web:c9db0a036f7f8eff2e3ccf"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();