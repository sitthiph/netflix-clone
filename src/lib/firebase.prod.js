import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

const firebaseConfig = {
  apiKey: "AIzaSyD9ncQ1iigpqXPzU3u6K1xUurM31hQu6f8",
  authDomain: "netflix-clone-fe673.firebaseapp.com",
  projectId: "netflix-clone-fe673",
  storageBucket: "netflix-clone-fe673.appspot.com",
  messagingSenderId: "904573918683",
  appId: "1:904573918683:web:a82936f866ab14869bdbfe"
};

const firebase = Firebase.initializeApp(firebaseConfig);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export {firebase};