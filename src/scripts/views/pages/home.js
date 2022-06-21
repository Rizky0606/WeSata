const Home = {
    async render() {
        return `
        <div class="hero" alt="hero" data-aos="fade-up" data-aos-duration="3000" style="background-image: linear-gradient(rgba(0, 0, 5, .5), rgba(0, 0, 5, .5)), url('assets/images-1.webp');">
            <div class="heroinner">
                <h1 class="herotitle">Jelajahi Indonesia <br>
                Bersama <b style="color: #FFB21B">Kami</b></h1>
                <p class="herosubtitle">Temukan berbagai keindahan<br>
                destinasi wisata serta adat<br>
                istiadat di Indonesia dengan<br>
                mudah dan menyenangkan!</p>
            </div>
        </div>
        <div class="card-container" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
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
                        <p>Di WeSata kamu dapat menjelajahi berbagai
                        macam tempat wisata di seluruh Indonesia
                        lengkap dengan budaya adat istiadatnya.
                        Kamu juga dapat menyimpan destinasi favoritmu
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

        <section class="destination"> 
            <h2 class="destination-category">Top Destination</h2>
            <button class="pre-btn"><i class="fa-solid fa-angle-left"></i></button>
            <button class="nxt-btn"><i class="fa-solid fa-angle-right"></i></button>
            <div class="destination-container">
                <div class="destination-card">
                    <div class="destination-image">
                        <span class="destination-city">Bandung</span>
                        <img src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2021/02/04/b9a441ee-a409-4897-b202-d20ddf1e558f-1612405052139-64d56f2449877ca5d518b0924113893f.jpg" class="destination-thumb" alt="Kawah Putih">
                        <a href="/#/detail-wisata/7" class="card-btn">Detail</a>
                    </div>
                    <div class="destination-info">
                        <h2 class="destination-name">Kawah Putih</h2>
                    </div>
                </div>
                <div class="destination-card">
                    <div class="destination-image">
                        <span class="destination-city">Kulon Progo</span>
                        <img src="https://garasijogja.com/wp-content/uploads/2017/03/@imanuel_yuda.jpg" class="destination-thumb" alt="Air Terjun Kedung Pedut">
                        <a href="/#/detail-wisata/9" class="card-btn">Detail</a>
                    </div>
                    <div class="destination-info">
                        <h2 class="destination-name">Air Terjun Kedung Pedut</h2>
                    </div>
                </div>
                <div class="destination-card">
                    <div class="destination-image">
                        <span class="destination-city">Magelang</span>
                        <img src="https://mmc.tirto.id/image/otf/700x0/2017/09/05/Borobudur--ISTOCK_ratio-16x9.jpg" class="destination-thumb" alt="Candi Borobudur">
                        <a href="/#/detail-wisata/20" class="card-btn">Detail</a>
                    </div>
                    <div class="destination-info">
                        <h2 class="destination-name">Candi Borobudur</h2>
                    </div>
                </div>
                <div class="destination-card">
                    <div class="destination-image">
                        <span class="destination-city">Raja Ampat</span>
                        <img src="https://asset.kompas.com/crops/28S0TkvG7koDd1XpB5m9t-703Ww=/0x0:780x520/780x390/data/photo/2021/03/21/605753630590a.jpg" class="destination-thumb" alt="Raja Ampat">
                        <a href="/#/detail-wisata/23" class="card-btn">Detail</a>
                    </div>
                    <div class="destination-info">
                        <h2 class="destination-name">Raja Ampat</h2>
                    </div>
                </div>
                <div class="destination-card">
                    <div class="destination-image">
                        <span class="destination-city">Medan</span>
                        <img src="https://awsimages.detik.net.id/community/media/visual/2020/09/13/danau-toba_169.jpeg?w=780&q=90" class="destination-thumb" alt="Danau Toba">
                        <a href="/#/detail-wisata/26" class="card-btn">Detail</a>
                    </div>
                    <div class="destination-info">
                        <h2 class="destination-name">Danau Toba</h2>
                    </div>
                </div>
                <div class="destination-card">
                    <div class="destination-image">
                        <span class="destination-city">Lombok Tengah</span>
                        <img src="https://topjabar.co/wp-content/uploads/2022/01/The-mandalika-kuta-lombok-1024x640-1.jpg" class="destination-thumb" alt="Pantai Kuta Mandalika">
                        <a href="/#/detail-wisata/46" class="card-btn">Detail</a>
                    </div>
                    <div class="destination-info">
                        <h2 class="destination-name">Pantai Kuta Mandalika</h2>
                    </div>
                </div>
                <div class="destination-card">
                    <div class="destination-image">
                        <span class="destination-city">Bantul</span>
                        <img src="https://suryayogya.com/wp-content/uploads/2020/06/parangtritis.jpg" class="destination-thumb" alt="Pantai Parangtritis">
                        <a href="/#/detail-wisata/48" class="card-btn">Detail</a>
                    </div>
                    <div class="destination-info">
                        <h2 class="destination-name">Pantai Parangtritis</h2>
                    </div>
                </div>
            </div>
            <a href="/#/wisata" class="button-next">Selengkapnya > </a>

        </section>

        <div class="content-container-2" id="about-us" data-aos="zoom-in" data-aos-duration="2000">
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
                    <p style="text-align: justify;">WeSata dibuat untuk memudahkan wisatawan mencari tempat wisata tujuannya, baik itu wisatawan lokal maupun mancanegara. WeSata menampilkan berbagai tempat wisata diseluruh Indonesia yang bisa dikunjungi dan tidak kalah menarik dengan wisata luar negeri. Cari tempat wisatamu dan tambahkan ke daftar favorite. Selamat ber-WeSata!</p>
                </div>
            </div>
        </div>

        <div class="content-container-3">
            <div class="content-3">
                <div class="content3_title">
                    <h2>Tunggu apalagi? <br><b style="color: #FFB21B;">Yuk</b> jelajahi Indonesia!</h2>
                </div>
                <div class="content3_button col text-center">
                    <a href="/#/wisata" class="btn btn-warning mx-auto border btn-lg rounded mt-3 button-nav">Jelajah Sekarang > </a>
                </div>
            </div>
        </div>
        `;
    }, 

    afterRender() {
        const destinationContainers = [...document.querySelectorAll('.destination-container')];
        const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
        const preBtn = [...document.querySelectorAll('.pre-btn')];

        destinationContainers.forEach((item, i) => {
            let containerDimensions = item.getBoundingClientRect();
            let containerWidth = containerDimensions.width;
        
            nxtBtn[i].addEventListener('click', () => {
                item.scrollLeft += containerWidth;
            })
        
            preBtn[i].addEventListener('click', () => {
                item.scrollLeft -= containerWidth;
            })
        })
    }
};

export default Home;
