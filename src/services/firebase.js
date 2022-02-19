
import { getDocs, collection, getFirestore, query, orderBy, where, doc, getDoc } from 'firebase/firestore';

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

  if (options?.orderBy) {
    queryItems.push(orderBy(...options.orderBy));
  }

  const data = await getItems(queryItems);
  return data;
}

async function getById (collectionName, id) {
  const database = getFirestore();

  const docRef = doc(database, collectionName, id);

  const result = await getDoc(docRef);
  return result.data();
}

async function getByReference (collectionName, refCollectionName, referenceField, options) {
  const database = getFirestore();
  const reference = doc(collection(database, refCollectionName), referenceField.value);

  const queryItems = [
    collection(database, collectionName),
    where(referenceField.name, '==', reference)
  ];

  if (options?.orderBy) {
    queryItems.push(orderBy(...options.orderBy));
  }

  const data = await getItems(queryItems);
  return data;
}

export const firebaseService = {
  get,
  getById,
  getByReference
};
