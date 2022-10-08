import about from "../pages/about/about.js";
import movies from "../pages/movies/movies.js";
import characters from "../pages/characters/characters.js";
import locations_vehicles from "../pages/locations_vehicles/locations_vehicles.js";
import data_analysis from "../pages/data/data_analysis.js";

const container = document.querySelector('#root');

const init = () => window.addEventListener('hashchange', renderPage);
const renderPage = () => {
    container.innerHTML = "";
    switch (window.location.hash) {
        case "#":
            container.appendChild(about());
            break;
        case "#movies":
            container.appendChild(movies());
            break;
        case "#characters":
            container.appendChild(characters());
            break;
        case "#locations_vehicles":
            container.appendChild(locations_vehicles());
            break;
        case "#data-analysis":
            container.appendChild(data_analysis());
            break;
        default:
            container.appendChild(about());
    };
};

window.addEventListener('load', () => {
    renderPage();
    init();
});