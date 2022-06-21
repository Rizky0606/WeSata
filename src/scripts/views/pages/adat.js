import WeSataSource from '../../data/wesata-source';
import { createListAdatTemplate } from '../templates/template-views';

const Adat = {
    async render() {
        return `
        <div class="content">
            <h2 class="content__heading">Adat Indonesia</h2>
            <div class="search-container">
                <input type="search" id="searchBar" placeholder="Cari disini">
            </div>
            <div id="loading"></div>
            <div class="content__list" id="contentList">
                <div class="listContainer" id="listContainer">
            </div>
            </div>
        </div>
        `;
    },

    async afterRender() {
        const loading = document.querySelector('#loading');
        loading.innerHTML = '<div class="loader"></div>';

        try {
        const searchBar = document.getElementById('searchBar');
        console.log(searchBar);
        searchBar.addEventListener('keyup', (e) => {
            const searchString = e.target.value.toLowerCase();
            const filteredAdat = list.filter((adat) => {
                return (
                    adat.name.toLowerCase().includes(searchString)
                );
            });
            const listContainer = document.querySelector('#listContainer');
            listContainer.innerHTML = "";
            filteredAdat.forEach((adat) => {
                listContainer.innerHTML += createListAdatTemplate(adat);
                });
        });
        const list = await WeSataSource.adat();
        const listContainer = document.querySelector('#listContainer');
        list.forEach((adat) => {
            listContainer.innerHTML += createListAdatTemplate(adat);
        });
        loading.style.display = "none";
        
    } catch (error){
        loading.style.display = "none";
        listContainer.innerHTML = `Error: ${error}, check to your connection`
    }
    },
};

export default Adat;
