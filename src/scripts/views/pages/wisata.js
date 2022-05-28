import createListItemTemplate from "../templates/template-views";
import WeSataSource from "../../data/wesata-source";

const Wisata = {
    async render() {
        return `
        <div class="content">
            <h2 class="content__heading"></h2>
            <div class="listContainer">
        
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
