import {ghibli} from '../../script/data.js';
import data from '../../data/ghibli/ghibli.js';

export default () => {
    const container = document.createElement("div");
    container.classList.add("container");
    
    container.innerHTML = `
        <section class="container">
            <h1>Filmography</h1>
            <hr>
            <form class="btn-catalogue">
                <select id="order-by" name="order" class="btn-catalogue-filter">
                    <option name="order" value="order" selected>Ordenar por</option>
                    <option name="order" value="rt_score">Avaliação (Z-A)</option>
                    <option name="order" value="release_date">Ano de Lançamento</option>
                </select>
            </form>
            <div class="modal"></div>
            <div class="catalogue-films"></div>
        </section> 
    `

    const films = data.films;
    const modal = container.querySelector('.modal');
    // const btnFilterDuration = container.querySelector('#filter-duration');
    const btnOrderFilms = container.querySelector('#order-by');

    function printCatalogue(filmsList) {
        const arrayFilms = filmsList.map((film) => {
            const template = `
            <div class="card">
                <button class= "btn-modal" type="button"> 
                    <img class="card-img" src="${film.poster}" alt="${film.title}" name="${film.title}" > 
                </button>
                <div class="card-txt">
                <h4>${film.title}</h4>
                <p>(${film.release_date})</p>
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

    // btnFilterDuration.addEventListener ('change', () => {
    //     const selected = (btnFilterDuration).value;
    //     const filterDuration = ghibli.filterDuration(films, selected);
    //     printCards(filterDuration);
    // });

    btnOrderFilms.addEventListener('change', () => {
        let selection = btnOrderFilms.value;
        const sortedFilms = ghibli.sortedFilms(films, selection);
        printCards(sortedFilms);
    });

    return container; 
  }