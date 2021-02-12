
import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBHnP76mMfn3DjFl_dPstjNbIUwz1fpRfg",
  authDomain: "react-crud-e83da.firebaseapp.com",
  databaseURL: "https://react-crud-e83da.firebaseio.com",
  projectId: "react-crud-e83da",
  storageBucket: "react-crud-e83da.appspot.com",
  messagingSenderId: "330743876718",
  appId: "1:330743876718:web:421755b0a5d8d2b34d6a7f"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
