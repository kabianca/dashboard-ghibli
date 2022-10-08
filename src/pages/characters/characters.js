import {ghibli} from '../../script/data.js';
import data from '../../data/ghibli/ghibli.js';

export default () => {
    const container = document.createElement("div");
    container.classList.add("container");
    
    container.innerHTML = `
    <section>
        <h1>Characters</h1>
        <hr>
        <h4>Selecione um filme para conhecer todos os seus personagens!</h4>
        <form id="buttons" class="btn-films"></form>
    </section>
    <div class="catalogue-people"></div>
    `
    const films = data.films;
    const cataloguePeople = container.querySelector('.catalogue-people');
    const btnForm = container.querySelector('#buttons');

    function printButtons(films) {
        const btn = films.map((film) => {
            return `<button class="btn-film" value="${film.title}">${film.title}</button>`
        });
        return btn.join('');
    }

    btnForm.innerHTML = printButtons(films);
    const btnFilms = container.querySelectorAll('button');

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


    for (let i = 0; i < btnFilms.length; i++) {
    btnFilms[i].addEventListener('click', () => {
        const filmPeople = ghibli.filmPeople(films, btnFilms[i].value);
        cataloguePeople.innerHTML = printCataloguePeople(filmPeople);
    });
    };
    return container;
}