
import { getDocs, collection, getFirestore, query, orderBy, where, doc } from 'firebase/firestore';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

async function getItems (queryItems) {
  const data = await getDocs(query(...queryItems));

  const result = [];
  data.forEach((doc) => result.push({ ...doc.data(), id: doc.id }));

  return result;
}

async function get (collectionName, options) {
  const database = getFirestore();

  const queryItems = [
    collection(database, collectionName)
  ];

  if (options.orderBy) {
    queryItems.push(orderBy(...options.orderBy));
  }

  const data = await getItems(queryItems);
  return data;
}

async function getByReference (collectionName, refCollectionName, referenceField) {
  const database = getFirestore();
  const reference = doc(collection(database, refCollectionName), referenceField.value);

  const queryItems = [
    collection(database, collectionName),
    where(referenceField.name, '==', reference)
  ];

  const data = await getItems(queryItems);
  return data;
}

async function login (userName, password) {
  const auth = getAuth();
  const result = await signInWithEmailAndPassword(auth, userName, password);
  return result.user;
}

export const firebaseService = {
  get,
  getByReference,
  login
};
