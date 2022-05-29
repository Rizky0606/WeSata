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

    static async detailItem(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }
}

export default WeSataSource;
