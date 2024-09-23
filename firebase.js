import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDu1Q5DB6-Zk9VJxPNdrylmxhwOUQh5V_Y",
    authDomain: "baitapbuoi5.firebaseapp.com",
    projectId: "baitapbuoi5",
    storageBucket: "baitapbuoi5.appspot.com",
    messagingSenderId: "1075259253037",
    appId: "1:1075259253037:web:665b4b84c44387dc7d33a4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;