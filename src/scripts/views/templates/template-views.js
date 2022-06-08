
const createListItemTemplate = (wisata) => `
<div class="listItem" tabindex="0">
    <div class="listItem__image">
        <img src="${wisata.pictured}" alt="${wisata.name}">
    </div>
    <div class="listItem__content">
        <a href="${`/#/detail-wisata/${wisata.id}`}" class="listItem__title">${wisata.name}</a>
        <p class="listItem_rating"><i class="fa-solid fa-star star"></i> ${wisata.rating}</p>
        <p class="listItem_city">${wisata.city}</p>
        <p class="listItem_desc">${wisata.description.slice(0, 200)}...</p>
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
            <a href="${`/#/detail-adat/${adat.id}`}" class="listItem__title">${adat.name}</a>
            <p class="listItem_city">${adat.province}</p>
            <p class="listItem_desc">${adat.description1.slice(0, 200)}...</p>
            <a href="${`/#/detail-adat/${adat.id}`}" class="buttonDetail">Detail</a>
        </div>
    </div>
`;

const createDetailWisataTemplate = (wisata) => `
    <h2 class="content__title" tabindex="0">${wisata.name}</h2>
    <div class="content__image"> 
        <img src="${wisata.pictured}" alt="${wisata.name}">
    </div>
    <div class="list__content">
        <i class="fa-regular fa-star" tabindex="0"> ${wisata.rating}</i>
        <i class="far fa-building" tabindex="0"> ${wisata.city}</i>
        <i class="fa-regular fa-map-pin"> ${wisata.province}</i>
        <i class="fa-regular fa-map" tabindex="0"> ${wisata.address}</i>
    </div>
    <p class="content__description" tabindex="0">${wisata.description}</p>
    
`;

const createDetailAdatTemplate = (adat) => `
    <h2 class="content__title" tabindex="0">${adat.name}</h2>
    <div class="content__image">
    <img src="${adat.pictured}" alt="${adat.name}">
    </div>
    <div class="list__content-adat">
        <i class="fa-regular fa-map" tabindex="0">${adat.province}</i>
    </div>
    <p class="content__description" tabindex="0">${adat.description1}</p>
    <p class="content__description" tabindex="0">${adat.description2}</p>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="like this wisata" id="favoriteButton" class="favorite">
    <i class="fa-regular fa-heart"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unlike this wisata" id="favoriteButton" class="favorite">
    <i class="fa-solid fa-heart"></i>
  </button>
`;

export {createListItemTemplate, 
    createListAdatTemplate, 
    createDetailWisataTemplate, 
    createDetailAdatTemplate,
    createFavoriteButtonTemplate,
    createFavoritedButtonTemplate
};
