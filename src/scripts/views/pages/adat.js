import WeSataSource from '../../data/wesata-source';
import { createListAdatTemplate } from '../templates/template-views';

const Adat = {
    async render() {
        return `
        <div class="content">
            <h2 class="content__heading">Adat Indonesia</h2>
            <div class="content__list" id="contentList">
                <div class="listContainer" id="listContainer">
            </div>
        
            </div>
        </div>
        `;
    },

    async afterRender() {
        const list = await WeSataSource.adat();
        const listContainer = document.querySelector('#listContainer');
        list.forEach((adat) => {
            listContainer.innerHTML += createListAdatTemplate(adat);
        });
    },
};

export default Adat;
