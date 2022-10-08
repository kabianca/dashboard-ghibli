import data from '../../data/ghibli/ghibli.js';

export default () => {
    const container = document.createElement("div");
    container.classList.add("container");
    
    container.innerHTML = `
        <section>
            <h1>Veículos e Locais</h1>
            <hr>
            <form class="btn-catalogue">
                <button class="btn-vehicles">Vehicles</button>
                <button class="btn-locations">Locations</button>
            </form>
        </section>
        <div class="catalogue"></div>
    `

    const films = data.films;
    const catalogue = container.querySelector('.catalogue');
    const btnLocations = container.querySelector('.btn-locations');
    const btnVehicles = container.querySelector('.btn-vehicles');
    const vehiclesInfos = printCatalogueVehicles(films);
    const locationsInfos = printCatalogueLocations(films);
    const locationsVehicles = locationsInfos.concat(vehiclesInfos);

    function printCatalogueLocations(films) {
        const arrayLocations = films.map((film) => {
        const locations = film.locations.map((location) => {
        const templateLocations = `
                <div class="card-locveh">
                <div class="card-img-cut-locveh">
                    <img class="card-img-locveh" src="${location.img}" alt="${location.name}" name="${location.name}"></button>
                </div>
                <div class="card-txt">
                    <h4>${film.title}</h4>
                    <p>${location.name}</p>
                </div>
                </div>
                `;
        return templateLocations;
        });
        return locations.join('');
        })
        return arrayLocations.join('');
    }

    function printCatalogueVehicles(films) {
        const arrayVehicles = films.map((film) => {
        const vehicles = film.vehicles.map((vehicle) => {
        const templateVehicles = `
                <div class="card">
                    <div class="card-img-cut">
                    <img class="card-img" src="${vehicle.img}" alt="${vehicle.name}" name="${vehicle.name}"> </button>
                </div>
                <div class="card-txt">
                    <h4>${film.title}</h4>
                    <p>${vehicle.name}<p>
                    <p>${vehicle.vehicle_class}<p>
                </div>
                </div>
                `;
        return templateVehicles;
        });
        return vehicles.join('');
        })
        return arrayVehicles.join('');
    }

    catalogue.innerHTML = locationsVehicles;

    btnLocations.addEventListener('click', () => {
    catalogue.innerHTML = printCatalogueLocations(films);
    })

    btnVehicles.addEventListener('click', () => {
    catalogue.innerHTML = printCatalogueVehicles(films);
    });
    return container;
}