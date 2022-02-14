import { initializeApp } from "firebase/app";
 
const firebaseConfig = {
  apiKey: "AIzaSyA7XY3-XvBUwCQeSt99PzzhUCMwA8cEbkM",
  authDomain: "opto-room.firebaseapp.com",
  projectId: "opto-room",
  storageBucket: "opto-room.appspot.com",
  messagingSenderId: "1097043449346",
  appId: "1:1097043449346:web:9014ca95b8dc82db9c791b",
  measurementId: "G-1YJXQJNWB1"
};

const app = initializeApp(firebaseConfig);
export default app;