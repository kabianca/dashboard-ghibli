/* eslint-disable */
import about from '../pages/about/about.js';
import movies from '../pages/movies/movies.js';
import characters from '../pages/characters/characters.js';
import locationsVehicles from '../pages/locations_vehicles/locationsVehicles.js';
import dataAnalysis from '../pages/data/dataAnalysis.js';
/* eslint-enable */

const container = document.querySelector('#root');

const renderPage = () => {
  container.innerHTML = '';
  switch (window.location.hash) {
    case '#':
      container.appendChild(about());
      break;
    case '#movies':
      container.appendChild(movies());
      break;
    case '#characters':
      container.appendChild(characters());
      break;
    case '#locations_vehicles':
      container.appendChild(locationsVehicles());
      break;
    case '#data-analysis':
      container.appendChild(dataAnalysis());
      break;
    default:
      container.appendChild(about());
  }
};

const init = () => window.addEventListener('hashchange', renderPage);

window.addEventListener('load', () => {
  renderPage();
  init();
});
