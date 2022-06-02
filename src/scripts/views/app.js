import UrlParser from "../routes/url-parser";
import routes from "../routes/routes";

class App {
    constructor({ button, drawer, content}) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();
        const skipLinkElem = document.querySelector('.skip-link');
        skipLinkElem.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('#mainContent').focus();
    });
      }
}

export default App;
