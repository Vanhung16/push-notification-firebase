importScripts("https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.3.1/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyBfDciRVDgNqaQUAuu2YuJ7nqWiVsFLx3w",
  authDomain: "app-demo-9a4be.firebaseapp.com",
  projectId: "app-demo-9a4be",
  storageBucket: "app-demo-9a4be.appspot.com",
  messagingSenderId: "11233344410",
  appId: "1:11233344410:web:88aa1b3ef9628f20781823",
  measurementId: "G-K202J56W28",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "../src/assets/image/default.svg",
    tag: "notification-1",
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
