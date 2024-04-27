// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCdMxKcTKVhKXFt5T27Z3sXs4DMyQRUBx4',
  authDomain: 'hs-chat-6842d.firebaseapp.com',
  projectId: 'hs-chat-6842d',
  storageBucket: 'hs-chat-6842d.appspot.com',
  messagingSenderId: '815628203525',
  appId: '1:815628203525:web:e485d0392b5afef35dce6c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firebase'deki auth yaspısın referansını react uygulmasına alma
export const auth = getAuth(app);

// google sağlayacısının kurulumu
export const provider = new GoogleAuthProvider();

// firebaseki firestore veritabanın referansını al
export const db = getFirestore(app);
