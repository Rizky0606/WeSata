import { createListItemTemplate } from "../templates/template-views";
import WeSataSource from "../../data/wesata-source";

const Wisata = {
    async render() {
        return `
        <div class="content">
            <h2 class="content__heading">Destinasi Wisata Indonesia</h2>
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
            const filteredWisata = list.filter((wisata) => {
                return (
                    wisata.name.toLowerCase().includes(searchString)
                );
            });
            const listContainer = document.querySelector('#listContainer');
            listContainer.innerHTML = "";
            filteredWisata.forEach((wisata) => {
                listContainer.innerHTML += createListItemTemplate(wisata);
                });
        });
        const list = await WeSataSource.wisata();
        const listContainer = document.querySelector('#listContainer');
        list.forEach((wisata) => {
        listContainer.innerHTML += createListItemTemplate(wisata);
        });

        loading.style.display = "none";

    } catch (error){
        loading.style.display = "none";
        listContainer.innerHTML = `Error: ${error}, check to your connection`
    }
    }
};

export default Wisata;
