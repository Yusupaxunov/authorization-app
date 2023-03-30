import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB_G-wbBj9HDL8K9l9v8oyJ7u9p49zQeF8",
  authDomain: "authorization-app-6f056.firebaseapp.com",
  projectId: "authorization-app-6f056",
  storageBucket: "authorization-app-6f056.appspot.com",
  messagingSenderId: "722355214187",
  appId: "1:722355214187:web:819cf365ade5e2fab7de2e",
  measurementId: "G-P2DW0N6ZWV"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();

export default app;
export {db, auth};