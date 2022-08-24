import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import "firebase/storage";
import { useState } from "react";

export const app = initializeApp({
  apiKey: "AIzaSyBfDciRVDgNqaQUAuu2YuJ7nqWiVsFLx3w",
  authDomain: "app-demo-9a4be.firebaseapp.com",
  projectId: "app-demo-9a4be",
  storageBucket: "app-demo-9a4be.appspot.com",
  messagingSenderId: "11233344410",
  appId: "1:11233344410:web:88aa1b3ef9628f20781823",
  measurementId: "G-K202J56W28",
});

export const messaging = getMessaging(app);
export const firestore = getFirestore(app);
export const functions = getFunctions(app);
export const storage = getStorage(app);

export const getTokenFound = async () => {
  let currentToken = "";
  try {
    currentToken = await getToken(messaging, {
      vapidKey:
        "BAW-yKbwoMiZl2sm0FYcfI1-6fr6x1EoumMuSkojjy2MWXr1EpB9zB-SKzhsUNxJ6wfaBK4Pb8QOgWUvXqG07PI",
    });
    if (currentToken) {
      console.log("CURRENT TOKEN", currentToken);
    } else {
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }
  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      alert(payload.notification.title);
      resolve(payload);
    });
  });
