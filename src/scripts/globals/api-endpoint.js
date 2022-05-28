import CONFIG from "./config";

const API_ENDPOINT = {
    WISATA: `${CONFIG.BASE_URL}WeSata`,
    ADAT: `${CONFIG.BASE_URL}adat`,
    DETAIL: (id) => `${CONFIG.BASE_URL}WeSata/${id}`,
};

export default API_ENDPOINT;
