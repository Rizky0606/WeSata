import { createListItemTemplate } from "../templates/template-views";
import WeSataSource from "../../data/wesata-source";

const Wisata = {
    async render() {
        return `
        <div class="content">
            <h2 class="content__heading">Destinasi Wisata Indonesia</h2>
            <div class="content__list" id="contentList">
                <div class="listContainer" id="listContainer">
            </div>
        
            </div>
        </div> 
        `;
    },

    async afterRender() {
        const list = await WeSataSource.wisata();
        const listContainer = document.querySelector('#listContainer');
        list.forEach((wisata) => {
            listContainer.innerHTML += createListItemTemplate(wisata);
        });
    },
};

export default Wisata;
