import {openDB} from 'idb';
import CONFIG from '../globals/config';

const {
    DATABASE_NAME,
    DATABASE_VERSION,
    OBJECT_STORE_NAME
} = CONFIG;

const dbPromise = openDB(DATABASE_NAME,DATABASE_VERSION, {
    upgrade(database) {
        database.createObjectStore(OBJECT_STORE_NAME, {keypath: 'id'});
    },
});

const FavoriteWisata = {
    async getWisata(id) {
        return (await dbPromise).get(OBJECT_STORE_NAME, id);
    },
    async getAllWisata() {
        return (await dbPromise).getAll(OBJECT_STORE_NAME);
    },
    async putWisata(wisata) {
        return (await dbPromise).put(OBJECT_STORE_NAME);
    },
    async deleteWisata(id) {
        return (await dbPromise).delete(OBJECT_STORE_NAME);
    },
};

export default FavoriteWisata;
