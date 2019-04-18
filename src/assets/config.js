import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBKa2bXKmETJ3WNnsHeygh6Qabe0iFkmso',
  authDomain: 'kanvan-hack.firebaseapp.com',
  databaseURL: 'https://kanvan-hack.firebaseio.com',
  projectId: 'kanvan-hack',
  storageBucket: 'kanvan-hack.appspot.com',
  messagingSenderId: '597242845570',
};
firebase.initializeApp(config);
const database = firebase.database();

export default database;
