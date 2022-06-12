import Wisata from "../views/pages/wisata";
import Home from "../views/pages/home";
import Adat from "../views/pages/adat";
import DetailWisata from "../views/pages/detail-wisata";
import DetailAdat from "../views/pages/detail-adat";
import Favorite from "../views/pages/favorite";
import Search from "../views/pages/search";

const routes = {
    '/': Home,
    '/wisata': Wisata,
    '/adat': Adat,
    '/detail-wisata/:id': DetailWisata,
    '/detail-adat/:id': DetailAdat,
    '/favorite': Favorite,
    '/search': Search,
};

export default routes;
