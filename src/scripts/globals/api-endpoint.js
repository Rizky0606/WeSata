import CONFIG from "./config";

const API_ENDPOINT = {
    WESATA: `${CONFIG.BASE_URL}WeSata`,
    ADAT: `${CONFIG.BASE_URL}adat`,
    Detail: (id) => `${CONFIG.BASE_URL}WeSata/${id}`,
};

export default API_ENDPOINT;
