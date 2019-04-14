import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


// Initialize Firebase
var config = {
    apiKey: "AIzaSyCHiBb-vFXcLF3K41HHRw6l2PIutUBCV3Y",
    authDomain: "glt-plan-mike-project.firebaseapp.com",
    databaseURL: "https://glt-plan-mike-project.firebaseio.com",
    projectId: "glt-plan-mike-project",
    storageBucket: "glt-plan-mike-project.appspot.com",
    messagingSenderId: "356611499582"
  };
  firebase.initializeApp(config);
//   firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase