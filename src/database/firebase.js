// export default db
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBj9nfern07BcjQbxdeDkXApJYfaJKsnHQ',
  authDomain: 'instagram-clone-react-9fbeb.firebaseapp.com',
  databaseURL: 'https://instagram-clone-react-9fbeb.firebaseio.com',
  projectId: 'instagram-clone-react-9fbeb',
  storageBucket: 'instagram-clone-react-9fbeb.appspot.com',
  messagingSenderId: '702602434017',
  appId: '1:702602434017:web:319ec79b9f4bc294782ea0',
  measurementId: 'G-GNN37K7XGH',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
