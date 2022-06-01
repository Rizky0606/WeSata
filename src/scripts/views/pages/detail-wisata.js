import UrlParser from '../../routes/url-parser';
import WeSataSource from '../../data/wesata-source';
import { createDetailWisataTemplate } from '../templates/template-views';

const DetailWisata = {
    async render() {
        return `
            <div class="containerDetailWisata" id="containerDetailWisata"></div>
        `
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const detail = await WeSataSource.detailWisata(url.id);
        const detailContainer = document.querySelector('#containerDetailWisata');
        detailContainer.innerHTML = createDetailWisataTemplate(detail);
    },
};

export default DetailWisata;
