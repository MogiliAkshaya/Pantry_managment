import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";  
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBuy6F6ZZq2nvidXhNTP6NJbBmiT0vTt3w",
  authDomain: "pantry-app-87502.firebaseapp.com",
  projectId: "pantry-app-87502",
  storageBucket: "pantry-app-87502.appspot.com",
  messagingSenderId: "445015133912",
  appId: "1:445015133912:web:5f1c31ae4b5a7f859bd1ad",
  measurementId: "G-MJ8J65T61V"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);  

let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { db, auth, storage, analytics };
