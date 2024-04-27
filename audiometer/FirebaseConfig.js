// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0dz8OenCIUK28lo2LQoU4UunbF_aAwds",
  authDomain: "audiometer-sih-69528.firebaseapp.com",
  projectId: "audiometer-sih-69528",
  storageBucket: "audiometer-sih-69528.appspot.com",
  messagingSenderId: "954569950479",
  appId: "1:954569950479:web:886c42801f6f06c1012a7a",
  measurementId: "G-05KH14WJ4B"
};
// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
// initializeAuth(FIREBASE_APP, {
//   // persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
// const analytics = getAnalytics(app);

