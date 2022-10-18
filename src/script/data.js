export function sortedFilms(films, selection) {
  const copy = [...films];
  const sorted = copy.sort((a, b) => {
    if (selection === 'rt_score') {
      return b.rt_score - a.rt_score;
    } if (selection === 'release_date') {
      return b.release_date - a.release_date;
    }
    return films;
  });
  return sorted;
}

export function filterDirector(films, selection) {
  const filmsDirector = films.filter((film) => film.director === selection);
  return filmsDirector;
}

export function filterPeople(films, selection) {
  const filmsPeople = films.filter((film) => film.title === selection);
  return filmsPeople;
}

export function filterSpecie(films, selection) {
  const specieTotal = [];
  films.filter((film) => {
    const specie = film.people.filter((person) => person.specie === selection);
    return specieTotal.push(...specie);
  });
  return specieTotal;
}

export function extractDirector(films) {
  const director = films.map((film) => film.director);
  return new Set(director);
}

export function extractListFilms(films) {
  const title = films.map((film) => film.title);
  return new Set(title);
}

export function extractListSpecies(films) {
  const specieTotal = [];
  films.map((film) => {
    const specie = film.people.map((person) => person.specie);
    return specieTotal.push(...specie);
  });
  return new Set(specieTotal);
}

export function countFilms(films) {
  return Object.keys(films).length;
}

export function countPeople(films) {
  const count = films.map((film) => Object.keys(film.people).length);
  count.join('');
  const sum = count.reduce((a, b) => a + b, 0);
  return sum;
}

export function countLocations(films) {
  const count = films.map((film) => Object.keys(film.locations).length);
  count.join('');
  const sum = count.reduce((a, b) => a + b, 0);
  return sum;
}

export function countVehicles(films) {
  const count = films.map((film) => Object.keys(film.vehicles).length);
  count.join('');
  const sum = count.reduce((a, b) => a + b, 0);
  return sum;
}
