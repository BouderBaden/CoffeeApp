import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB1kYaE3ce8Boj16a_l8zRWp8b7pL27qCw",
  authDomain: "coffee-app-c14d2.firebaseapp.com",
  projectId: "coffee-app-c14d2",
  storageBucket: "coffee-app-c14d2.appspot.com",
  messagingSenderId: "338704698643",
  appId: "1:338704698643:web:79faf383c13b9cdf929ee6"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)