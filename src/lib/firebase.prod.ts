import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// seed database

// firebase config
const config = {
  apiKey: "AIzaSyDkP_bwIIzLnKXWzeuYkJDwBCoul50t72E",
  authDomain: "netflix-clone-22e86.firebaseapp.com",
  databaseURL: "https://netflix-clone-22e86.firebaseio.com",
  projectId: "netflix-clone-22e86",
  storageBucket: "netflix-clone-22e86.appspot.com",
  messagingSenderId: "20033444129",
  appId: "1:20033444129:web:40c25be0ccf8f32b388660",
};
const firebase = Firebase.initializeApp(config);

export { firebase };
