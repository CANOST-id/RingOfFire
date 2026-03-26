import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Firebase imports
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

// Ihre Firebase-Konfiguration - WICHTIG: Ersetzen Sie diese mit Ihren echten Werten!
const firebaseConfig = {
  apiKey: "AIzaSyDa0TZbY9h8Ipcab_kTA0IZmyozO2PjK30",
  authDomain: "ringoffire-f11be.firebaseapp.com",
  databaseURL: "https://ringoffire-f11be-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ringoffire-f11be",
  storageBucket: "ringoffire-f11be.firebasestorage.app",
  messagingSenderId: "981349359901",
  appId: "1:981349359901:web:a3bfa3190ed36363df01f4"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
};
