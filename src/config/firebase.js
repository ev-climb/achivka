import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyD-CVfoSeJVfExWnaxgy46Mxm52JlfQTGM',
  authDomain: 'achivka-b5d7f.firebaseapp.com',
  databaseURL: 'https://achivka-b5d7f-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'achivka-b5d7f',
  storageBucket: 'achivka-b5d7f.appspot.com',
  messagingSenderId: '28027301249',
  appId: '1:28027301249:web:b76ff3da9f566525bacc80',
  measurementId: 'G-LSD8YNT9KP',
});

const db = getFirestore(firebaseApp);

export const actionsRef = collection(db, 'actions');
