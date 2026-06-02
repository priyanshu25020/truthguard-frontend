import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth"; // GithubAuthProvider import karo

const firebaseConfig = {
  apiKey: "AIzaSyCJLjN5N7okejrqT8RbvVwddiaqGIzYF-o",
  authDomain: "truthguardai27.firebaseapp.com",
  projectId: "truthguardai27",
  storageBucket: "truthguardai27.firebasestorage.app",
  messagingSenderId: "1054522357955",
  appId: "1:1054522357955:web:59bddeb5d582f4dc5e8a76",
  measurementId: "G-YG5QX2Z23W"
};
export const githubProvider = new GithubAuthProvider(); // 🔥 YEH NAYI LINE ADD KARNI HAI
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();