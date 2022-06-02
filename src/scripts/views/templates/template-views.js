
const createListItemTemplate = (wisata) => `
    <div class="listItem" tabindex="0">
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
    <div class="listItem" tabindex="0">
        <div class="listItem__image">
            <img src="${adat.pictured}" alt="${adat.name}">
        </div>
        <div class="listItem__content">
            <h3 class="listItem__title">${adat.name}</h3>
            <p>Provinsi: ${adat.province}</p>
            <p>${adat.description}</p>
            <a href="${`/#/detail-adat/${adat.id}`}" class="buttonDetail">Detail</a>
        </div>
    </div>
`;

const createDetailWisataTemplate = (wisata) => `
    <h2 class="content__title" tabindex="0">${wisata.name}</h2>
    <center> 
    <img src="${wisata.pictured}" alt="${wisata.name}" class="content__image">
    </center>
    <div class="list__content">
        <i class="fa-regular fa-star" tabindex="0">${wisata.rating}</i>
        <i class="fa-regular fa-city" tabindex="0">${wisata.city}</i>
        <i class="fa-light fa-location-dot" tabindex="0">${wisata.province}</i>
        <i class="fa-regular fa-map" tabindex="0">${wisata.address}</i>
    </div>
    <p class="content__description" tabindex="0">${wisata.description}</p>
    
`;

const createDetailAdatTemplate = (adat) => `
    <h2 class="content__title" tabindex="0">${adat.name}</h2>
    <center>
    <img src="${adat.pictured}" alt="${adat.name}" class="content__image">
    </center>
    <div class="list__content-adat">
        <i class="fa-regular fa-map" tabindex="0">${adat.province}</i>
    </div>
    <p class="content__description" tabindex="0">${adat.description}</p>
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
