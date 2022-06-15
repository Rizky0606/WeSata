import 'regenerator-runtime';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/wisata.css';
import '../styles/detail.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App ({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
  });
  
  window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
  });

AOS.init();
