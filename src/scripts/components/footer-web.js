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
                            <div class="title footerTitle" id="headerTitle">WE<b style="color: #76684c;">SATA</b></div>
                            <p>
                            Bersama Jelajahi Indonesia.
                            </p>
                        </div>
                    <!-- Grid column -->
            
                    <!-- Grid column -->
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <!-- Links -->
                        <h2 class="text-uppercase fw-bold mb-4 list" style="color: black!important; font-size: 20px;">
                        Navigasi
                        </h2>
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
                        <h2 class="text-uppercase fw-bold mb-4 list" style="color: black!important; font-size: 20px;">
                        Kontak Kami
                        </h2>
                        <p>
                        <i class="fas fa-envelope me-3"></i>
                            <a href="mailto:friskaprs@gmail.com" class="footer_contact">friskaprs@gmail.com</a>
                        </p>
                        <i class="fas fa-envelope me-3"></i>
                        <a href="mailto:rizkyfauzi132@gmail.com" class="footer_contact">rizkyfauzi132@gmail.com</a>
                        </p>
                        <p><i class="fas fa-phone me-3"></i> <a href="tel:+6281344989234" class="footer_contact">+6281344989234</a></p>
                        <p><i class="fas fa-phone me-3"></i> <a href="tel:+6282359009125" class="footer_contact">+6282359009125</a></p>
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
