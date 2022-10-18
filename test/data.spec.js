import {
  expect,
  describe,
  it,
} from '@jest/globals';

import {
  sortedFilms,
  filterDirector,
  filterPeople,
  filterSpecie,
  extractDirector,
  extractListFilms,
  extractListSpecies,
  countFilms,
  countPeople,
  countLocations,
  countVehicles,
} from '../src/script/data.js';//eslint-disable-line

describe('Typeof analysis', () => {
  it('Should be a object', () => {
    expect(typeof ghibli).toBe('object');
  });

  it('Shoude be a function', () => {
    expect(typeof sortedFilms).toBe('function');
    expect(typeof filterDirector).toBe('function');
    expect(typeof filterPeople).toBe('function');
    expect(typeof filterSpecie).toBe('function');
    expect(typeof extractDirector).toBe('function');
    expect(typeof extractListFilms).toBe('function');
    expect(typeof extractListSpecies).toBe('function');
    expect(typeof countFilms).toBe('function');
    expect(typeof countPeople).toBe('function');
    expect(typeof countLocations).toBe('function');
    expect(typeof countVehicles).toBe('function');
  });
});

const filmsTest = [
  {
    title: 'Castle in the Sky',
    director: 'Hayao Miyazaki',
    rt_score: '95',
    release_date: '1986',
    people: [
      { name: 'Lusheeta Toel Ul Laputa' }, { name: 'Pazu' }, { name: 'Dola' },
    ],
    locations: [
      { name: 'Gondoa' }, { name: "Pazu's Mines" }, { name: 'Laputa' },
    ],
    vehicles: [{ name: 'Air Destroyer Goliath' }],
  },
  {
    title: "Kiki's Delivery Service",
    director: 'Hayao Miyazaki',
    rt_score: '96',
    release_date: '1989',
    people: [
      { name: 'Kiki' }, { name: 'Jiji' }, { name: 'Ursula' },
    ],
    locations: [
      { name: "Ursula's Log Cabin" }, { name: 'Koriko' }, { name: 'Karikiya' },
    ],
    vehicles: [],
  },
  {
    title: 'My Neighbor Totoro',
    director: 'Hayao Miyazaki',
    rt_score: '93',
    release_date: '1988',
    people: [
      { name: 'Satsuki Kusakabe' }, { name: 'Mei Kusakabe' }, { name: 'Tatsuo Kusakabe' },
    ],
    locations: [
      { name: "Kusakabe's House" }, { name: 'Matsugo' }, { name: "Satsuki's School House" },
    ],
    vehicles: [],
  },
];

describe('Filter functions', () => {
  it('film filter by short duration', () => {
    const filmByDirector = filterDirector(filmsTest, 'Hayao Miyazaki');

    expect(filmByDirector.length).toEqual(3);
    expect(filmByDirector[0].title).toEqual('Castle in the Sky');
  });

  // it('characters filter by film', () => {
  //   const characters = filmPeople(filmsTest, "Kiki's Delivery Service");

  //   expect(characters[0].people.length).toEqual(3);
  //   expect(characters[0].people[0].name).toEqual('Kiki');
  //   expect(characters[0].people[2].name).toEqual('Ursula');
  // });
});

// describe('should order the films', () => {
//   it('should sort films by score', () => {
//     const sortedScore = sortedFilms(filmsTest, 'rt_score');

//     expect(sortedScore.length).toEqual(3);
//     expect(sortedScore[0].rt_score).toEqual('96');
//     expect(sortedScore[2].rt_score).toEqual('93');
//   });

//   it('should sort films by date', () => {
//     const sortedDate = sortedFilms(filmsTest, 'release_date');

//     expect(sortedDate.length).toEqual(3);
//     expect(sortedDate[0].release_date).toEqual('1989');
//     expect(sortedDate[2].release_date).toEqual('1986');
//   });

//   it('should not sort films', () => {
//     const sorteBy = sortedFilms(filmsTest, 'order');

//     expect(sorteBy.length).toEqual(3);
//     expect(sorteBy[0].title).toEqual('Castle in the Sky');
//     expect(sorteBy[2].title).toEqual('My Neighbor Totoro');
//   });
// });

// describe('should return aggregate calculations', () => {
//   it('count films', () => {
//     const filmsTotal = countFilms(filmsTest);

//     expect(filmsTotal).toBe(3);
//   });

//   it('count people', () => {
//     const peopleTotal = countPeople(filmsTest);

//     expect(peopleTotal).toBe(9);
//   });

//   it('count locations', () => {
//     const locationsTotal = countLocations(filmsTest);

//     expect(locationsTotal).toBe(9);
//   });

//   it('count vehicles', () => {
//     expect(countVehicles(filmsTest)).toBe(1);
//   });
// });
