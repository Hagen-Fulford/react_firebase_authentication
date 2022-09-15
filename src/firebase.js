// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "*******",
    authDomain: "fir-auth-33631.firebaseapp.com",
    projectId: "fir-auth-33631",
    storageBucket: "fir-auth-33631.appspot.com",
    messagingSenderId: "194788678463",
    appId: "1:194788678463:web:acf53dcc0c47509d2c118a"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export default app