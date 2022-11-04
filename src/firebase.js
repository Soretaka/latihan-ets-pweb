/* eslint-disable prettier/prettier */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmqi8Vp4jIDkWmah4Vn2kYRAXXxuXEzoA",
  authDomain: "pweb-ets-9be6a.firebaseapp.com",
  // eslint-disable-next-line prettier/prettier
  projectId: "pweb-ets-9be6a",
  storageBucket: "pweb-ets-9be6a.appspot.com",
  messagingSenderId: "321909757484",
  // eslint-disable-next-line prettier/prettier
  appId: "1:321909757484:web:1d0bd3ed393a2f32776389",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
