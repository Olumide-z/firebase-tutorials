// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAtzuwrFTGWMaRRzjy8i7L8jnnOz5vQlKI",
  authDomain: "upload-project-30f74.firebaseapp.com",
  projectId: "upload-project-30f74",
  storageBucket: "upload-project-30f74.appspot.com",
  messagingSenderId: "546616746420",
  appId: "1:546616746420:web:4eb93de8e0aaef3287d2e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)