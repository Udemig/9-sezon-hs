// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCdMxKcTKVhKXFt5T27Z3sXs4DMyQRUBx4',
  authDomain: 'hs-chat-6842d.firebaseapp.com',
  projectId: 'hs-chat-6842d',
  storageBucket: 'hs-chat-6842d.appspot.com',
  messagingSenderId: '815628203525',
  appId: '1:815628203525:web:e11737ecce4985215dce6c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth hizmetinin referansını al
export const auth = getAuth(app);

// google sağlayıcısının kurulumu
export const provider = new GoogleAuthProvider();

// veritbanının referansını alma
export const db = getFirestore(app);

// medya depolama alanının referansını alma
export const storage = getStorage(app);
