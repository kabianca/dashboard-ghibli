import data from '../../data/ghibli/ghibli.js';
import { ghibli } from '../../script/data.js';

export default () => {
    const container = document.createElement("div");
    container.classList.add("container");

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
        `
    const films = data.films;
    const menuFilm = container.querySelector('#film');
    const menuSpecie = container.querySelector('#specie');
    const cataloguePeople = container.querySelector('.catalogue-characters');

    function printButtons(extractList) {
        return [...extractList].map(item => `<option value="${item}">${item}</option>`).join('');
    }

    menuSpecie.innerHTML += printButtons(ghibli.extractListSpecies(films));
    menuFilm.innerHTML += printButtons(ghibli.extractListFilms(films));


    function printCataloguePeople(films) {
        const arrayPeople = films.map((film) => {
            const people = film.people.map((person) => {
            const templatePerson = `
                <div class="card">
                    <div class="card-img-cut">
                        <img class="card-img" src="${person.img}" alt="${person.name}" name="${person.name}" >
                    </div>
                    <div class="card-txt">
                        <h4>${person.name}</h4>
                        <p>Gender: ${person.gender}</p>
                        <p>Age: ${person.age}</p>
                        <p>Specie: ${person.specie}</p>
                    </div> 
                </div>
                `;
            return templatePerson;
            });
            return people.join('');
        })
        return arrayPeople.join('');
    }

    function printFilterSpecie(specieCharacters) {
        const arrayPeople = specieCharacters.map((person) => {
            const templatePerson = `
                <div class="card">
                    <div class="card-img-cut">
                    <img class="card-img" src="${person.img}" alt="${person.name}" name="${person.name}" >
                    </div>
                    <div class="card-txt">
                    <h4>${person.name}</h4>
                    <p>Gender: ${person.gender}</p>
                    <p>Age: ${person.age}</p>
                    <p>Specie: ${person.specie}</p>
                    </div> 
                </div>
                `;
            return templatePerson;
            });
        return arrayPeople.join('');
    }

    menuFilm.addEventListener('click', () => {
        cataloguePeople.innerHTML = printCataloguePeople(ghibli.filterPeople(films, menuFilm.value));
    })

    menuSpecie.addEventListener('click', () => {
        const specieCharacters = ghibli.filterSpecie(films, menuSpecie.value)
        cataloguePeople.innerHTML = printFilterSpecie(specieCharacters);
    })

    return container;
}