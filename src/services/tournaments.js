import { getDocs, collection, getFirestore } from "firebase/firestore";

async function getAll() {
    const database = getFirestore();
    const data = await getDocs(collection(database, 'tournaments'));

    const result = [];
    data.forEach((doc) => result.push(doc.data()));
    
    return result;
}

export const tournamentService = {
    getAll
};