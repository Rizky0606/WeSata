import FavoriteWisata from '../data/favorite-wisata';
import { createFavoriteButtonTemplate, createFavoritedButtonTemplate } from '../views/templates/template-views';

const FavoriteButtonInitiator = {
  async init({ favoriteButtonContainer, wisata }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._wisata = wisata;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._wisata;

    if (await this._isWisataExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isWisataExist(id) {
    const wisata = await FavoriteWisata.getWisata(id);
    return !!wisata;
  },

  _renderFavorite() {
    this._favoriteButtonContainer.innerHTML = createFavoriteButtonTemplate();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteWisata.putWisata(this._wisata);
      this._renderButton();
    });
  },

  _renderFavorited() {
    this._favoriteButtonContainer.innerHTML = createFavoritedButtonTemplate();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteWisata.deleteWisata(this._wisata.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;
