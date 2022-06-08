const Search = {
    async render() {
        return `
        <div class="content">
            <h2 class="content__heading">Pencarian Destinasi Wisata</h2>
            <div class="search-container">
                <input type="search" placeholder="Cari disini">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div class="content__list" id="contentList">
                <div class="listContainer" id="listContainer"></div>
            </div>
        </div>
        `;
    },

}

export default Search;
