
const createListItemTemplate = (wisata) => `
    <div class="listItem">
        <div class="listItem__image">
            <img src="${wisata.pictured}" alt="${wisata.title}">
        </div>
        <div class="listItem__content">
            <h3 class="listItem__title">${wisata.title}</h3>
            <p>${wisata.rating}</p>
            <p>${wisata.city}</p>
            <a href="" class="buttonDetail">Detail</a>
        </div>
    </div>
`;

export default createListItemTemplate;
