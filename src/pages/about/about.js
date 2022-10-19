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
      <p>Studio Ghibli Inc. is a Japanese animation film studio based in Koganei, Tokyo. Widely known for his animated
      films, he is also responsible for a variety of short subjects, television films and commercials, documentaries
      and collaborated with videos game studios on the visual development of several games. Founded in 1985 by Isao
      Takahata and Hayao Miyazaki, Studio Ghibli is responsible for a total of twenty-two feature films. In Japan,
      his films are popular for topping the box office as soon as they are released and five are among the ten
      highest-grossing anime feature films made in Japan.</p>

      <p>In this dashboard I present a total of <strong id="count-films" class="counter"></strong> films, in which
      <strong id="count-people" class="counter"></strong> characters give form to fantastic stories about the Japanese
      daily life or distant kingdoms, pilot <strong id="count-vehicles" class="counter"></strong> unique vehicles and
      transit through <strong id="count-locations" class="counter"></strong> extraordinary locations.</p>
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
