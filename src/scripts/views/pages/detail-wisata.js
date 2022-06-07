import UrlParser from '../../routes/url-parser';
import WeSataSource from '../../data/wesata-source';
import { createDetailWisataTemplate } from '../templates/template-views';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';

const DetailWisata = {
    async render() {
        return `
            <div class="containerDetail" id="containerDetailWisata"></div>
            <div id="favoriteButtonContainer"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const wisata = await WeSataSource.detailWisata(url.id);
        const detailContainer = document.querySelector('#containerDetailWisata');
        detailContainer.innerHTML = createDetailWisataTemplate(wisata);

        FavoriteButtonInitiator.init({
            favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
            wisata: {
                id: wisata.id,
                name: wisata.name,
                city: wisata.city,
                province: wisata.province,
                pictured: wisata.pictured,
                rating: wisata.rating,
                description: wisata.description,
            },
        });
    },
};

export default DetailWisata;
