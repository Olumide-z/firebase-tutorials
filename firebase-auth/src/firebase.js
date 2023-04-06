import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD588Q57OUz6RhCPO4kcScbGLYNU47AKAM",
  authDomain: "auth-production-1008b.firebaseapp.com",
  projectId: "auth-production-1008b",
  storageBucket: "auth-production-1008b.appspot.com",
  messagingSenderId: "69731971516",
  appId: "1:69731971516:web:e834edcea91ec14ad3fbb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;