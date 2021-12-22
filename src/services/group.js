import { COLLECTIONS } from "../constants/collections";
import { firebaseService } from "./firebase";

async function get(tournamentId) {
    const result = await firebaseService.getByReference(
        COLLECTIONS.GROUPS, 
        COLLECTIONS.TOURNAMENTS,
        { name: 'tournament', value: tournamentId }
    );

    return result;
}

export const groupService = {
    get
};