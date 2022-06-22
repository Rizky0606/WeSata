
const createListItemTemplate = (wisata) => `
<div class="listItem" tabindex="0" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
    <div class="listItem__image">
        <img class="lazyload" data-src="${wisata.pictured}" alt="${wisata.name}">
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
    <div class="listItem" tabindex="0" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
        <div class="listItem__image">
            <img class="lazyload" data-src="${adat.pictured}" alt="${adat.name}">
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
    <h2 class="content__title" id="contentTitle" tabindex="0">${wisata.name}</h2>
    <div class="content__image"> 
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2000">
            <img src="${wisata.pictured}" class="d-block w-100" alt="${wisata.name}">
        </div>
        <div class="carousel-item" data-bs-interval="2000">
            <img src="${wisata.pictured2}" class="d-block w-100" alt="${wisata.name}">
        </div>
        <div class="carousel-item" data-bs-interval="2000">
            <img src="${wisata.pictured3}" class="d-block w-100" alt="${wisata.name}">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </button>
</div>
    </div>
    <div class="list__content" id="listContent">
        <i class="fa-solid fa-star" tabindex="0"> ${wisata.rating}</i>
        <i class="fa-solid fa-map-pin" tabindex="0"> ${wisata.province}</i>
        <i class="fa-solid fa-building" tabindex="0"> ${wisata.city}</i>
        <i class="fa-solid fa-map" tabindex="0"> ${wisata.address}</i>
    </div>
    <p class="content__description" id="contentDesc" tabindex="0">${wisata.description}</p>
    
`;

const createDetailAdatTemplate = (adat) => `
    <h2 class="content__title" id="contentTitle" tabindex="0">${adat.name}</h2>
    <div class="content__image">
    <img src="${adat.pictured}" alt="${adat.name}">
    </div>
    <div class="list__content-adat">
        <i class="fa-solid fa-map" tabindex="0"> ${adat.province}</i>
    </div>
    <p class="content__description" id="contentDesc" tabindex="0">${adat.description1}</p>
    <p class="content__description" id="contentDesc" tabindex="0" style="margin-bottom: 50px;">${adat.description2}</p>
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
