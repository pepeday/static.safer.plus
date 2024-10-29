// Add Firebase scripts for compatibility with Firebase Messaging
importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaPhm1lEuLddy1KzEy00JYMxzIANzGCB4",
  authDomain: "safer-plus.firebaseapp.com",
  projectId: "safer-plus",
  storageBucket: "safer-plus.appspot.com",
  messagingSenderId: "902254915997",
  appId: "1:902254915997:web:d1f3bebc9edef8c96fbf74"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Handle background notifications with Firebase Messaging
messaging.onBackgroundMessage((payload) => {
    console.log('Received background message: ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'icon.png', // Adjust paths as needed
        badge: 'badge.png',
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

// Existing push notification handler for non-Firebase notifications
self.addEventListener('push', function(event) {
    const data = event.data ? event.data.text() : 'No payload';

    const options = {
        body: data,
        icon: 'icon.png',
        badge: 'badge.png',
    };

    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});
