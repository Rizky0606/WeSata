class Navbar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <header class="app-bar">
                <div class="app-bar__menu">
                    <button id="hamburgerButton">☰</button>
                </div>
                <div class="title" id="headerTitle">WE<b style="color: #FDDEA3;">SATA</b></div>
                <nav class="navigation" id="navigationDrawer">
                    <ul>
                        <li><a href="/">Beranda</a></li>
                        <li><a href="#/wisata">Destinasi</a></li>
                        <li><a href="#/adat">Adat</a></li>
                        <li><a href="#/favorite">Favorit</a></li>
                    </ul>
                </nav>
            </header>
        `
    }
}

customElements.define("nav-bar", Navbar);
