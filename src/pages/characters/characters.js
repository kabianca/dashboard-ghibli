import data from '../../data/ghibli/ghibli.js';//eslint-disable-line

import {
  extractListFilms,
  extractListSpecies,
  filterSpecie,
  filterPeople,
} from '../../script/data.js';//eslint-disable-line

export default () => {
  const container = document.createElement('div');
  container.classList.add('container');

  container.innerHTML = `
    <section>
        <h1>Characters</h1>
        <hr>
        <h4>Meet the Ghibli characters from your favorite movie or all the characters of a specific species!</h4>
        <form id="buttons" class="btn-films">
            <select id="film" class="btn-catalogue-filter">
                <option value="default">Movie</option>
            </select>
            <select id="specie" class="btn-catalogue-filter">
                <option value="default">Specie</option>
            </select>
        </form>
    </section>
    <div class="catalogue-characters"></div>
    `;
  const { films } = data;
  const menuFilm = container.querySelector('#film');
  const menuSpecie = container.querySelector('#specie');
  const cataloguePeople = container.querySelector('.catalogue-characters');

  function printButtons(extractList) {
    return [...extractList].map((item) => `<option value="${item}">${item}</option>`).join('');
  }

  menuSpecie.innerHTML += printButtons(extractListSpecies(films));
  menuFilm.innerHTML += printButtons(extractListFilms(films));

  function printCataloguePeople(obj) {
    const arrayPeople = obj.map((film) => {
      const people = film.people.map((person) => {
        const templatePerson = `
          <div class="card-characters">
            <img class="card-img" src="${person.img}" alt="${person.name}" name="${person.name}" >
            <h4>${person.name}</h4>
            <p>Gender: ${person.gender}</p>
            <p>Age: ${person.age}</p>
            <p>Specie: ${person.specie}</p>
          </div>
          `;
        return templatePerson;
      });
      return people.join('');
    });
    return arrayPeople.join('');
  }

  function printFilterSpecie(specieCharacters) {
    const arrayPeople = specieCharacters.map((person) => {
      const templatePerson = `
        <div class="card-characters">
          <img class="card-img" src="${person.img}" alt="${person.name}" name="${person.name}" >
          <h4>${person.name}</h4>
          <p>Gender: ${person.gender}</p>
          <p>Age: ${person.age}</p>
          <p>Specie: ${person.specie}</p>
        </div>
        `;
      return templatePerson;
    });
    return arrayPeople.join('');
  }

  cataloguePeople.innerHTML = printCataloguePeople(films);

  menuFilm.addEventListener('change', () => {
    cataloguePeople.innerHTML = printCataloguePeople(filterPeople(films, menuFilm.value));
  });

  menuSpecie.addEventListener('change', () => {
    const specieCharacters = filterSpecie(films, menuSpecie.value);
    cataloguePeople.innerHTML = printFilterSpecie(specieCharacters);
  });

  return container;
};
