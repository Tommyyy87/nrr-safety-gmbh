// src/main.tsx
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Firebase-Konfiguration
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase-Konfiguration
const firebaseConfig = {
    apiKey: "AIzaSyC9PVIdOXUEymYv0tgGTSkBvMlFz9YyMIM",
    authDomain: "nrr-safety.firebaseapp.com",
    projectId: "nrr-safety",
    storageBucket: "nrr-safety.firebasestorage.app",
    messagingSenderId: "41766239725",
    appId: "1:41766239725:web:20d0b1065254af94ad7be4",
    measurementId: "G-KNSZ0YXF3Z"
  };

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById("root")!).render(<App />);