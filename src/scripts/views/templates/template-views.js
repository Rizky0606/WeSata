
const createListItemTemplate = (wisata) => `
    <div class="listItem">
        <div class="listItem__image">
            <img src="${wisata.pictured}" alt="${wisata.name}">
        </div>
        <div class="listItem__content">
            <h3 class="listItem__title">${wisata.name}</h3>
            <p>Rating: ${wisata.rating}</p>
            <p>Kota: ${wisata.city}</p>
            <a href="" class="buttonDetail">Detail</a>
        </div>
    </div>
`;

const createListAdatTemplate = (wisata) => `
    <div class="listItem">
        <div class="listItem__image">
            <img src="${wisata.pictured}" alt="${wisata.name}">
        </div>
        <div class="listItem__content">
            <h3 class="listItem__title">${wisata.name}</h3>
            <p>Kota: ${wisata.city}</p>
            <p>${wisata.description}</p>
            <a href="" class="buttonDetail">Detail</a>
        </div>
    </div>
`;

export {createListItemTemplate, createListAdatTemplate};
