import *as firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDYg8rRcyKKCuquF7OUC7GII7j6J90aF0s",
    authDomain: "projektori-9688c.firebaseapp.com",
    databaseURL: "https://projektori-9688c.firebaseio.com",
    projectId: "projektori-9688c",
    storageBucket: "projektori-9688c.appspot.com",
    messagingSenderId: "366865871111",
    appId: "1:366865871111:web:94b659a4c991e3077455a2",
    measurementId: "G-7WDH3S5CVN"
  };

  firebase.initializeApp(firebaseConfig);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;
 