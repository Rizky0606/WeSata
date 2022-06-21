import UrlParser from "../../routes/url-parser";
import { createDetailAdatTemplate } from "../templates/template-views";
import WeSataSource from "../../data/wesata-source";

const DetailAdat = {
    async render() {
        return `
            <div id="loading"></div>
            <div class="containerDetail" id="containerDetailAdat"></div>
        `;
    },

    async afterRender() {
        const loading = document.querySelector('#loading');
        loading.innerHTML = '<div class="loader"></div>';

        try {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const detail = await WeSataSource.detailAdat(url.id);
        const adatContainer = document.querySelector('#containerDetailAdat');
        adatContainer.innerHTML = createDetailAdatTemplate(detail);

        loading.style.display = "none";

        } catch (error){
            loading.style.display = "none";
            listContainer.innerHTML = `Error: ${error}, check to your connection`
        }
    },
};

export default DetailAdat;
