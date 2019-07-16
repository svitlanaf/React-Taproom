import app from "firebase/app";
import "firebase/auth";

// const config = {
//   apiKey: "AIzaSyCngrA4dJKL2LtB24-2QC48qNnk-4eAxH0",
//   authDomain: "tap-room-48dee.firebaseapp.com",
//   databaseURL: "https://tap-room-48dee.firebaseio.com",
//   projectId: "tap-room-48dee",
//   storageBucket: "",
//   messagingSenderId: "763583654184"
// };

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  oSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
