import db from '../firebase';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';

const usersCollection = collection(db, 'users');

export const fetchUsers = async () => {
  const usersSnapshot = await getDocs(usersCollection);
  return usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addUser = async (user) => {
  const userDoc = await addDoc(usersCollection, user);
  return { id: userDoc.id, ...user };
};

export const updateUser = async (id, updatedData) => {
  const userDoc = doc(db, 'users', id);
  await updateDoc(userDoc, updatedData);
};

export const deleteUser = async (id) => {
  const userDoc = doc(db, 'users', id);
  await deleteDoc(userDoc);
};