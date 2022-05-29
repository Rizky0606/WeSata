const Home = {
    async render() {
        return `
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="assets/images-1.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="assets/images-2.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="assets/images-3.jpg" class="d-block w-100" alt="...">
                    </div>
                </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div class="profile">
            <div class="profile__text">
                <h2>Jelajahi Indonesia <br> Bersama Kami</h2>
                <p>Temukan lebih dari 1000 keindahan <br> destinasi wisata di Indonesia dengan mudah <br> dan menyenangkan</p>
        </div>
            <div class="profile__image">
                <img src="assets/images-4.png" alt="">
            </div>
        </div>
    
        `;
    }, 
};

export default Home;
