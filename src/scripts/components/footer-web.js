class Footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer class="text-center text-lg-start bg-light text-muted footerSection" style="background-color: #eaebf4 !important;">
        <!-- Section: Links  -->
            <section class="footerSection">
                <div class="container text-center text-md-start mt-5">
                    <!-- Grid row -->
                    <div class="row mt-3">
                    <!-- Grid column -->
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <!-- Content -->
                            <div class="title footerTitle" id="headerTitle">WE<b style="color: #FDDEA3;">SATA</b></div>
                            <p>
                            Bersama Jelajahi Indonesia.
                            </p>
                        </div>
                    <!-- Grid column -->
            
                    <!-- Grid column -->
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4" style="color: black!important;">
                        Navigasi
                        </h6>
                        <p>
                        <a href="/" class="text-reset" style="text-decoration: none;">Beranda</a>
                        </p>
                        <p>
                        <a href="#/wisata" class="text-reset" style="text-decoration: none;">Destinasi</a>
                        </p>
                        <p>
                        <a href="#/adat" class="text-reset" style="text-decoration: none;">Adat</a>
                        </p>
                        <p>
                        <a href="#/favorite" class="text-reset" style="text-decoration: none;">Favorit</a>
                        </p>
                    </div>
                    <!-- Grid column -->
            
                    <!-- Grid column -->
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4" style="color: black!important;">
                        Kontak Kami
                        </h6>
                        <p>
                        <i class="fas fa-envelope me-3"></i>
                            <a href="mailto:friskaprs@gmail.com" style="text-decoration: none;">friskaprs@gmail.com</a>
                        </p>
                        <i class="fas fa-envelope me-3"></i>
                        <a href="mailto:rizkyfauzi132@gmail.com" style="text-decoration: none;">rizkyfauzi132@gmail.com</a>
                        </p>
                        <p><i class="fas fa-phone me-3"></i> +6281344989234</p>
                        <p><i class="fas fa-phone me-3"></i> +6282359009125</p>
                    </div>
                    <!-- Grid column -->
                    </div>
                    <!-- Grid row -->
                </div>
            </section>
    
            <!-- Copyright -->
            <div id="footer">
                Copyright © 2022 WeSata, All Rights Reserved.
            </div>
        </footer>
        `
    }
}

customElements.define("footer-web", Footer);
