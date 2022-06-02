
const createListItemTemplate = (wisata) => `
    <div class="listItem">
        <div class="listItem__image">
            <img src="${wisata.pictured}" alt="${wisata.name}">
        </div>
        <div class="listItem__content">
            <h3 class="listItem__title">${wisata.name}</h3>
            <p>Rating: ${wisata.rating}</p>
            <p>Kota: ${wisata.city}</p>
            <a href="${`/#/detail-wisata/${wisata.id}`}" class="buttonDetail">Detail</a>
        </div>
    </div>
`;

const createListAdatTemplate = (adat) => `
    <div class="listItem">
        <div class="listItem__image">
            <img src="${adat.pictured}" alt="${adat.name}">
        </div>
        <div class="listItem__content">
            <h3 class="listItem__title">${adat.name}</h3>
            <p>Kota: ${adat.city}</p>
            <p>${adat.description}</p>
            <a href="${`/#/detail-adat/${adat.id}`}" class="buttonDetail">Detail</a>
        </div>
    </div>
`;

const createDetailWisataTemplate = (wisata) => `
    <h2 class="content__title">${wisata.name}</h2>
    <img src="${wisata.pictured}" alt="${wisata.name}" class="content__image">
    <div class="list__content">
        <i class="fa-regular fa-star">${wisata.rating}</i>
        <i class="fa-regular fa-map">${wisata.address}</i>
        <p>Kota: ${wisata.city}</p>
        <p>Provinsi: ${wisata.province}</p>
        <p class="content__description">${wisata.description}</p>
    </div>
`;

const createDetailAdatTemplate = (adat) => `
    <h2 class="content__title">${adat.name}</h2>
    <img src="${adat.pictured}" alt="${adat.name}" class="content__image">
    <div class="list__content">
        <i class="fa-regular fa-map">${adat.province}</i>
        <p class="content__description">${adat.description}</p>
    </div>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="like this wisata" id="favoriteButton" class="favorite">
    <i class="fa-regular fa-heart"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unlike this wisata" id="favoriteButton" class="favorite">
    <i class="fa-regular fa-heart"></i>
  </button>
`;

export {createListItemTemplate, 
    createListAdatTemplate, 
    createDetailWisataTemplate, 
    createDetailAdatTemplate,
    createFavoriteButtonTemplate,
    createFavoritedButtonTemplate
};
