import data from '../../data/ghibli/ghibli.js';//eslint-disable-line

export default () => {
  const container = document.createElement('div');
  container.classList.add('container');

  container.innerHTML = `
    <section>
        <h1>Veículos e Locais</h1>
        <hr>
        <form class="btn-catalogue">
            <button class="btn-vehicles">Vehicles</button>
            <button class="btn-locations">Locations</button>
        </form>
    </section>
    <div class="catalogue-local-vehicles"></div>
    `;

  const { films } = data;
  const catalogue = container.querySelector('.catalogue-local-vehicles');
  const btnLocations = container.querySelector('.btn-locations');
  const btnVehicles = container.querySelector('.btn-vehicles');

  function printCatalogueLocations(obj) {
    const arrayLocations = obj.map((film) => {
      const locations = film.locations.map((location) => {
        const templateLocations = `
          <div class="card-vehloc">
              <img class="card-img-locveh" src="${location.img}" alt="${location.name}" name="${location.name}"></button>
              <h4>${film.title}</h4>
              <p>${location.name}</p>
          </div>
          `;
        return templateLocations;
      });
      return locations.join('');
    });
    return arrayLocations.join('');
  }

  function printCatalogueVehicles(obj) {
    const arrayVehicles = obj.map((film) => {
      const vehicles = film.vehicles.map((vehicle) => {
        const templateVehicles = `
          <div class="card-vehloc">
              <img class="card-img-locveh" src="${vehicle.img}" alt="${vehicle.name}" name="${vehicle.name}"> </button>
              <h4>${film.title}</h4>
              <p>${vehicle.name}<p>
              <p>${vehicle.vehicle_class}<p>
          </div>
          `;
        return templateVehicles;
      });
      return vehicles.join('');
    });
    return arrayVehicles.join('');
  }

  const vehiclesInfos = printCatalogueVehicles(films);
  const locationsInfos = printCatalogueLocations(films);
  const locationsVehicles = locationsInfos.concat(vehiclesInfos);

  catalogue.innerHTML = locationsVehicles;

  btnLocations.addEventListener('click', () => {
    catalogue.innerHTML = printCatalogueLocations(films);
  });

  btnVehicles.addEventListener('click', () => {
    catalogue.innerHTML = printCatalogueVehicles(films);
  });
  return container;
};
