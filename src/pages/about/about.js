import {
  countFilms,
  countLocations,
  countPeople,
  countVehicles,
} from '../../script/data.js';//eslint-disable-line

import data from '../../data/ghibli/ghibli.js';//eslint-disable-line

export default () => {
  const container = document.createElement('div');
  container.classList.add('container');

  container.innerHTML = `
    <section class="container-about">
        <h1>About Studio Ghibli</h1>
        <hr>
        <p>Studio Ghibli Inc. é um  estúdio de cinema de animação japonês com sede em Koganei, Tóquio. Amplamente
        conhecido por seus seus filmes de animação, mas também é responsável por uma variedade de curtas, uma série
        televisiva, comerciais de televisão, documentários e colaboração no desenvolvimento de vários jogos.
        Fundado em 1985 por Isao Takahata e Hayao Miyazaki o Studio Ghibli é o responsável por um total de vinte e dois
        longas-metragens. No Japão, seus filmes são populares por liderar as bilheterias assim que lançados.</p>

        <p>Neste dashbord apresento um total de <strong id="count-films" class="counter"></strong> longas, nos quais
        <strong id="count-people" class="counter"></strong> personagens dão forma a histórias fantásticas sobre o
        cotidiano japonês ou reinos distantes, pilotam <strong id="count-vehicles" class="counter"></strong> veículos
        singulares e transitam por <strong id="count-locations" class="counter"></strong> locais extraordinários.
        </p>
        <img src="../assets/characters.png" id="img-characters" alt="Imagem com os personagens do Studios Ghibli">
    </section>  
`;

  const { films } = data;
  const resultCountFilms = container.querySelector('#count-films');
  const resultCountPeople = container.querySelector('#count-people');
  const resultCountLocations = container.querySelector('#count-locations');
  const resultCountVehicles = container.querySelector('#count-vehicles');

  resultCountFilms.innerHTML = countFilms(films);
  resultCountPeople.innerHTML = countPeople(films);
  resultCountLocations.innerHTML = countLocations(films);
  resultCountVehicles.innerHTML = countVehicles(films);

  return container;
};
