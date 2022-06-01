import UrlParser from "../../routes/url-parser";
import { createDetailAdatTemplate } from "../templates/template-views";
import WeSataSource from "../../data/wesata-source";

const DetailAdat = {
    async render() {
        return `
            <div class="containerDetailAdat" id="containerDetailAdat"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const detail = await WeSataSource.detailAdat(url.id);
        const adatContainer = document.querySelector('#containerDetailAdat');
        adatContainer.innerHTML = createDetailAdatTemplate(detail);
    },
};

export default DetailAdat;
