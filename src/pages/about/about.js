import { ghibli } from '../../script/data.js';
import data from '../../data/ghibli/ghibli.js';

export default () => {
    const container = document.createElement("div");
    container.classList.add("container");
    
    container.innerHTML = `
        <section class="container">
            <h1>About Studio Ghibli</h1>
            <hr>
            <p>Fundado em 1985 por Isao Takahata e Hayao Miyazaki o Studio Ghibli é o responsável por um total de vinte e dois
            longas-metragens. No Japão, seus filmes são populares por liderar as bilheterias assim que lançados.</p>
            <p>Neste dashbord apresentamos um total de <strong id="count-films" class="counter"></strong> longas, nos quais
            <strong id="count-people" class="counter"></strong> personagens dão forma a histórias fantásticas sobre o
            cotidiano japonês ou reinos distantes, pilotam <strong id="count-vehicles" class="counter"></strong> veículos
            singulares e transitam por <strong id="count-locations" class="counter"></strong> locais extraordinários.
            </p>
        </section>  
    `

    const films = data.films;
    const resultCountFilms = container.querySelector('#count-films');
    const resultCountPeople = container.querySelector('#count-people');
    const resultCountLocations = container.querySelector('#count-locations');
    const resultCountVehicles = container.querySelector('#count-vehicles');

    resultCountFilms.innerHTML = ghibli.countFilms(films);
    resultCountPeople.innerHTML = ghibli.countPeople(films);
    resultCountLocations.innerHTML = ghibli.countLocations(films);
    resultCountVehicles.innerHTML = ghibli.countVehicles(films);

    return container; 
  }