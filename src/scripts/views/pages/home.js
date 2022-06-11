const Home = {
    async render() {
        return `
        <div class="hero" alt="hero" style="background-image: linear-gradient(rgba(0, 0, 5, .5), rgba(0, 0, 5, .5)), url('assets/images-1.jpg');">
            <div class="heroinner">
                <h1 class="herotitle">Jelajahi Indonesia <br>
                Bersama <b style="color: #FFB21B">Kami</b></h1>
                <p class="herosubtitle">Temukan berbagai keindahan<br>
                destinasi wisata serta adat<br>
                istiada di Indonesia dengan<br>
                mudah dan menyenangkan!</p>
            </div>
        </div>
        <div class="card-container" data-aos="fade-up" data-aos-duration="2000">
            <div class="row">
                
                    <div class="card border-0 shadow-sm p-3 bg-body rounded" style="width: 15.5rem; height: 20rem;">
                        <div class="card-body" style="text-align: center;">
                            <i class="fa-regular fa-thumbs-up fa-3x" style="color: #FFB21B; margin-top:35px; margin-bottom:35px;"></i>
                            <h5 class="card-title" style="margin-bottom: 25px;">Travellers Suka Layanan Kami</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Berbagai macam destinasi memudahkan para traveller.</h6>
                        </div>
                    </div>
                
                
                    <div class="card border-0 shadow-sm p-3 bg-body rounded" style="width: 15.5rem; height: 20rem;">
                        <div class="card-body" style="text-align: center;">
                            <i class="fa-solid fa-people-roof fa-3x" style="color: #FFB21B; margin-top:35px; margin-bottom:35px;"></i>
                            <h5 class="card-title" style="margin-bottom: 25px;">Adat Indonesia yang Lengkap</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Informasi budaya adat-istiadat di Indonesia.</h6>
                        </div>
                    </div>
               
                
                    <div class="card border-0 shadow-sm p-3 bg-body rounded" style="width: 15.5rem; height: 20rem;">
                        <div class="card-body" style="text-align: center;">
                            <i class="fa-regular fa-heart fa-3x" style="color: #FFB21B; margin-top:35px; margin-bottom:35px;"></i>
                            <h5 class="card-title" style="margin-bottom: 25px;">Fitur Like Destinasi Favorit</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Simpan destinasi favoritmu hanya dengan tombol like.</h6>
                        </div>
                    </div>
                
            </div>
        </div>
        
        <div class="content-container-1" data-aos="zoom-in" data-aos-duration="1200">
            <div class="content-1">
                <div class="profile">
                    <div class="profile__text">
                        <h2><b style="color: #FFB21B;">Kenapa</b> memilih WeSata?</h2>
                        <p>Di WeSata kamu dapat menjelajahi berbagai<br>
                        macam tempat wisata di seluruh Indonesia<br>
                        lengkap dengan budaya adat istiadatnya.<br>
                        Kamu juga dapat menyimpan destinasi favoritmu<br>
                        dengan praktis, lho!</p>
                    </div>
                    <div class="profile__image">
                        <picture>
                            <source type="image/webp" srcset="assets/images-4.webp">
                            <source type="image/jpeg" srcset="assets/images-4.png">
                            <img class="lazyload" data-src="assets/images-4.png" alt="">
                        </picture>
                    </div>
                </div>
            </div>
        </div>

        <div class="content-container-2" id="about-us" data-aos="fade-right" data-aos-offset="500" data-aos-duration="1200" data-aos-easing="ease-in-sine">
            <div class="content-2">
                <div class="content2_title">
                    <h2>Tentang Kami<h2>
                </div>
                <div class="content2_body">
                    <picture>
                        <source type="image/webp" srcset="assets/images-5.webp">
                        <source type="image/jpeg" srcset="assets/images-5.png">
                        <img class="lazyload" data-src="assets/images-5.png" alt="">
                    </picture>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam sodales sem. Vivamus in auctor tortor, ut tempus nulla. Nunc varius erat et dolor pretium, imperdiet ultricies turpis pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec arcu vestibulum lorem sodales placerat. Nunc interdum porttitor sapien.</p>
                </div>
            </div>
        </div>

        <div class="content-container-3">
            <div class="content-3">
                <div class="content3_title">
                    <h2>Tunggu apalagi? <b style="color: #FFB21B;">Yuk</b> jelajahi Indonesia!</h2>
                </div>
                <div class="content3_button col text-center">
                    <a href="/#/wisata" class="btn btn-warning mx-auto border btn-lg rounded">Jelajah Sekarang></a>
                </div>
            </div>
        </div>
        `;
    }, 
};

export default Home;
