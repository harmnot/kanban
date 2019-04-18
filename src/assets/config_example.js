import firebase from "firebase";

const config = {
  apiKey: " key ",
  authDomain: " domain of project id ",
  databaseURL: "url goes here",
  projectId: " project id goes here ",
  storageBucket: "",
  messagingSenderId: ""
};
firebase.initializeApp(config);
const database = firebase.database();

export default database;
