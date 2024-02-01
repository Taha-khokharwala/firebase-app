import { initializeApp } from "firebase/app";


const firebaseConfig = {
   apiKey: "AIzaSyC9hbRRJK_0-L4srMaIv7_sxdNl-W78UNg",
  authDomain: "fir-app-1e454.firebaseapp.com",
  databaseURL: "https://fir-app-1e454-default-rtdb.firebaseio.com",
  projectId: "fir-app-1e454",
  storageBucket: "fir-app-1e454.appspot.com",
  messagingSenderId: "196931310320",
  appId: "1:196931310320:web:1aa52ddd2eb39af18da835"
};

export const app = initializeApp(firebaseConfig);