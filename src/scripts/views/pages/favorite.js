import FavoriteWisata from '../../data/favorite-wisata';
import { createListItemTemplate } from '../templates/template-views';

const Favorite = {
    async render() {
        return `
            <div class="content">
                <h2 class="content__heading">Destinasi Favoritmu</h2>
                <div class="content__list" id="contentList">
                    <div class="listContainer" id="listContainer">
                    </div>
        
                </div>
            </div>
        `;
    },

    async afterRender() {
        const list = await FavoriteWisata.getAllWisata();
        const listContainer = document.querySelector('#listContainer');
        if (list.length === 0){
            listContainer.innerHTML = '<h6>Tidak ada destinasi favorit untuk ditampilkan!</h6>'
        }  
        list.forEach((wisata) => {
            listContainer.innerHTML += createListItemTemplate(wisata);
        });
    },
};

export default Favorite;
