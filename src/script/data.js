export const ghibli = {
  countFilms,
  countLocations,
  countPeople,
  countVehicles,
  extractDirector,
  extractListFilms,
  extractListSpecies,
  filterPeople,
  filterDirector,
  filterSpecie,
  sortedFilms,
};

function sortedFilms(films, selection) {
  const copy = [...films]
  const sorted = copy.sort((a, b) => {
    if (selection === 'rt_score') {
      return b.rt_score - a.rt_score;
    } else if (selection === 'release_date') {
      return b.release_date - a.release_date;
    } else {
      return films;
    }
  });
  return sorted;
}

function filterDirector(films, selection) {
  const filmsDirector = films.filter((film) => film.director === selection)
      return filmsDirector;
};

function filterPeople(films, selection) {
  const filmsPeople = films.filter((film) => film.title === selection);
  return filmsPeople;
}

function filterSpecie(films, selection) {
  let specieTotal = [];
  films.filter((film) => {
      const specie = film.people.filter((person) => person.specie === selection);
      specieTotal.push(...specie);
  });
  return specieTotal;
}


function extractDirector(films) {
  const director = films.map((film) => film.director);
  return new Set(director);
}

function extractListFilms(films) {
  const title = films.map((film) => film.title);
  return new Set(title);
}

function extractListSpecies(films) {
  const specieTotal = [];
  films.map((film) => {
      const specie = film.people.map((person) => person.specie);
      specieTotal.push(...specie);
  });
  return new Set(specieTotal);
}

function countFilms(films) {
  return Object.keys(films).length;
}

function countPeople(films) {
  const count = films.map((film) => {
    return Object.keys(film.people).length;
  });
  count.join('')
  const sum = count.reduce((a, b) => a + b, 0);
  return sum;
}

function countLocations(films) {
  const count = films.map((film) => {
    return Object.keys(film.locations).length;
  });
  count.join('')
  const sum = count.reduce((a, b) => a + b, 0);
  return sum;
}

function countVehicles(films) {
  const count = films.map((film) => {
    return Object.keys(film.vehicles).length;
  });
  count.join('')
  const sum = count.reduce((a, b) => a + b, 0);
  return sum;
}
