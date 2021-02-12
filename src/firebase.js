
import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  //firebase configuration
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
