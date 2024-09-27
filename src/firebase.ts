import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
    apiKey: "AIzaSyDya69xkY7x7YHWi2_AjNp6tg7aRvrwOiE",
    authDomain: "mobile-invitation-34353.firebaseapp.com",
    databaseURL: "https://mobile-invitation-34353-default-rtdb.firebaseio.com",
    projectId: "mobile-invitation-34353",
    storageBucket: "mobile-invitation-34353.appspot.com",
    messagingSenderId: "244294914700",
    appId: "1:244294914700:web:2eb6d41b745a717d9021a9",
    measurementId: "G-SNXLBV2JH9"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
// const analytics = getAnalytics(app);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

