import API_ENDPOINT from "../globals/api-endpoint";

class WeSataSource {
    static async wisata() {
        const response = await fetch(API_ENDPOINT.WISATA);
        const responseJson = await response.json();
        return responseJson;
    }

    static async adat() {
        const response = await fetch(API_ENDPOINT.ADAT);
        const responseJson = await response.json();
        return responseJson;
    }

    static async detailWisata(id) {
        const response = await fetch(API_ENDPOINT.DetailWisata(id));
        return response.json();
    }

    static async detailAdat(id) {
        const response = await fetch(API_ENDPOINT.DetailAdat(id));
        return response.json();
    }
}

export default WeSataSource;
