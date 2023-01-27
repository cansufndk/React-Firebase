// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiCk31EckD8GRjgMG870nBLZlvCcfdrAk",
  authDomain: "reactap-be2af.firebaseapp.com",
  projectId: "reactap-be2af",
  storageBucket: "reactap-be2af.appspot.com",
  messagingSenderId: "715125455984",
  appId: "1:715125455984:web:068e723dc7a1836c2188b5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const createUserFirebase = async (email, password) => {
  //*Kullanıcı pluşturmak için
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.log("error user", error);
  }
};

export const loginUserFirebase = async (email, password) => {
  //*Kullanıcı giriş yapması için
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.log("error login", error);
  }
};

export const userStatus = async () => {
  //*Kullanıcı giriş çıkış dinleyici
  const { user } = onAuthStateChanged(auth, user);
  if (user) {
    const uid = user.uid;
    console.log("user uid", uid);
  } else {
    console.log("user çıkış yaptı");
  }
};

export default app;
