import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC7jMSF1ZeEy9UaUktcz9C0FHnCMBgSGGs",
  authDomain: "social-media-mern-app-39d3d.firebaseapp.com",
  projectId: "social-media-mern-app-39d3d",
  storageBucket: "social-media-mern-app-39d3d.appspot.com",
  messagingSenderId: "692883904957",
  appId: "1:692883904957:web:975c50d25e980cb2c61ad4",
  measurementId: "G-898KKXVP75"
};

export const app     = initializeApp(firebaseConfig);
export const db      = getFirestore(app);
export const auth    = getAuth(app);
export const storage = getStorage(app);