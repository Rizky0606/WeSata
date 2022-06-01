import CONFIG from "./config";

const API_ENDPOINT = {
    WISATA: `${CONFIG.BASE_URL}WeSata`,
    ADAT: `${CONFIG.BASE_URL}adat`,
    DetailWisata: (id) => `${CONFIG.BASE_URL}WeSata/${id}`,
    DetailAdat: (id) => `${CONFIG.BASE_URL}adat/${id}`,
};

export default API_ENDPOINT;
