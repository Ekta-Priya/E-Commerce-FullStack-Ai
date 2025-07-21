import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginonecart-30df1.firebaseapp.com",
  projectId: "loginonecart-30df1",
  storageBucket: "loginonecart-30df1.firebasestorage.app",
  messagingSenderId: "829617203972",
  appId: "1:829617203972:web:aa7cdfcc34b7c59d6ebe51"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider=new GoogleAuthProvider()
export{auth,provider}