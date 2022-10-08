export const ghibli = {
  sortedFilms,
  countFilms,
  countLocations,
  countPeople,
  countVehicles,
  filmPeople,
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

function filmPeople(films, btn) {
  const filmSelected = films.filter((film) => {
    if (btn === film.title) {
      return film.people;
    }
  })
  return filmSelected;
}
