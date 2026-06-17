// Firebase মডিউল ইম্পোর্ট করা
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// এখানে doc এবং updateDoc নতুন করে যুক্ত করা হয়েছে
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBEBD6g__aVs1wS1jcRF1y06tXJREuA2H4",
  authDomain: "e-commerce-project-c7b34.firebaseapp.com",
  projectId: "e-commerce-project-c7b34",
  storageBucket: "e-commerce-project-c7b34.firebasestorage.app",
  messagingSenderId: "728780261287",
  appId: "1:728780261287:web:007c24055d292caa7cd882"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// অন্য ফাইলে ব্যবহারের জন্য সবগুলো ফাংশন এক্সপোর্ট করা হলো
export { db, collection, addDoc, getDocs, doc, updateDoc };