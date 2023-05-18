
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyBsa3REQCK2VJtKwUe4IrehE6TL7fpztZI",
  authDomain: "chat-exemplo-d09f6.firebaseapp.com",
  projectId: "chat-exemplo-d09f6",
  storageBucket: "chat-exemplo-d09f6.appspot.com",
  messagingSenderId: "902228690252",
  appId: "1:902228690252:web:f7d7200b09aebc70b63be9",
  measurementId: "G-3YQV9W7HZX"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);