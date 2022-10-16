import data from '../../data/ghibli/ghibli.js';
import { ghibli } from '../../script/data.js';

export default () => {
    const container = document.createElement("div");
    container.classList.add("container");
    
    container.innerHTML = `
        <section class="container">
            <h1>Filmography</h1>
            <hr>
            <form class="btn-catalogue">
                <select id="order-by" name="order" class="btn-catalogue-filter">
                    <option name="order" value="default" selected>Order by</option>
                    <option name="order" value="rt_score">Best Ratings</option>
                    <option name="order" value="release_date">Release Date (Descending)</option>
                </select>
                <select id="director" class="btn-catalogue-filter">
                    <option value="default">Director</option>
                </select>
            </form>
            <div class="modal"></div>
            <div class="catalogue-films"></div>
        </section> 
    `
    const films = data.films;
    const modal = container.querySelector('.modal');
    const btnDirector = container.querySelector('#director');
    const btnOrderFilms = container.querySelector('#order-by');

    function printButtonsDirectors(extractDirector) {
        return [...extractDirector].map(director => `<option value="${director}">${director}</option>`).join('');
    }

    btnDirector.innerHTML += printButtonsDirectors(ghibli.extractDirector(films));

    function printCatalogue(filmsList) {
        const arrayFilms = filmsList.map((film) => {
            const template = `
            <div class="card-movie">
                <button class= "btn-modal" type="button"> 
                    <img class="card-img" src="${film.poster}" alt="${film.title}" name="${film.title}" > 
                </button>
                <div class="card-txt">
                <h4>${film.title}</h4>
                <p>${film.release_date} | ${film.rt_score }<i class="fa-regular fa-star"></i></p>
                </div>
            </div>
            `;
            return template; 
        }); 
        return arrayFilms.join('');
    }

    function printModal (film) {
        return `
        <div class="modal-content">
            <h1>${film.title}</h1>
            <p class="modal-director">Dirigido por ${film.director}</p>
            <p>Score: ${film.rt_score}</p><br>
            <p>${film.description}</p><br>
            <p><strong>There is ${(film.people).length} characters!</strong></p>
            <button class="close">Sair</button>
        </div> 
        `
    }

    function printCards (films){
        const catalogue = container.querySelector('.catalogue-films');
        catalogue.innerHTML = printCatalogue(films);

        const btnModal = container.querySelectorAll('.btn-modal');

        for (let i = 0; i < films.length; i++){
            const showModal = prepareModal(films[i]);
            btnModal[i].addEventListener ('click', showModal);
        }
    }
    printCards(films);

    function prepareModal (film) {
        return function (){
            modal.innerHTML = printModal(film);
            const closeModal = container.querySelector('.close');
            closeModal.addEventListener ('click', btnHideModal);
            showModal ();
        }
    }

    modal.addEventListener ('click', hideModal);

    function showModal(){
        modal.style.display = "block";
    }
    function btnHideModal(){
        modal.style.display = "none";
    }
    function hideModal(e){
        if (e.target == modal){
        modal.style.display = "none";
        }
    }

    btnDirector.addEventListener ('change', () => {
        const selected = btnDirector.value;
        const filterDirection = ghibli.filterDirector(films, selected);
        printCards(filterDirection);
    });

    btnOrderFilms.addEventListener('change', () => {
        let selection = btnOrderFilms.value;
        const sortedFilms = ghibli.sortedFilms(films, selection);
        printCards(sortedFilms);
    });

    return container; 
  }