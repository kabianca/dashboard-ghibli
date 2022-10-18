import data from '../../data/ghibli/ghibli.js';//eslint-disable-line

import {
  extractDirector,
  filterDirector,
  sortedFilms,
} from '../../script/data.js';//eslint-disable-line

export default () => {
  const container = document.createElement('div');
  container.classList.add('container');

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
    `;
  const { films } = data;
  const modal = container.querySelector('.modal');
  const btnDirector = container.querySelector('#director');
  const btnOrderFilms = container.querySelector('#order-by');

  function printButtonsDirectors(list) {
    return [...list].map((director) => `<option value="${director}">${director}</option>`).join('');
  }

  btnDirector.innerHTML += printButtonsDirectors(extractDirector(films));

  function printCatalogue(filmsList) {
    const arrayFilms = filmsList.map((film) => {
      const template = `
        <div class="card-movie">
            <button class= "btn-modal" type="button"> 
                <img class="card-img" src="${film.poster}" alt="${film.title}" name="${film.title}" > 
            </button>
            <div class="card-txt">
            <h4>${film.title}</h4>
            <p>${film.release_date} | ${film.rt_score}<i class="fa-regular fa-star"></i></p>
            </div>
        </div>
        `;
      return template;
    });
    return arrayFilms.join('');
  }

  function printModal(film) {
    return `
      <div class="modal-content">
        <h1>${film.title}</h1>
        <p class="modal-director">Dirigido por ${film.director}</p>
        <p>Score: ${film.rt_score}</p><br>
        <p>${film.description}</p><br>
        <p><strong>There is ${(film.people).length} characters!</strong></p>
        <button class="close">Sair</button>
      </div> 
     `;
  }

  function showModal() {
    modal.style.display = 'block';
  }
  function btnHideModal() {
    modal.style.display = 'none';
  }
  function hideModal(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  }

  function prepareModal(film) {
    return function modPrint() {
      modal.innerHTML = printModal(film);
      const closeModal = container.querySelector('.close');
      closeModal.addEventListener('click', btnHideModal);
      showModal();
    };
  }

  function printCards(obj) {
    const catalogue = container.querySelector('.catalogue-films');
    catalogue.innerHTML = printCatalogue(obj);

    const btnModal = container.querySelectorAll('.btn-modal');

    for (let i = 0; i < obj.length; i += 1) {
      const viewModal = prepareModal(films[i]);
      btnModal[i].addEventListener('click', viewModal);
    }
  }
  printCards(films);

  modal.addEventListener('click', hideModal);

  btnDirector.addEventListener('change', () => {
    const selected = btnDirector.value;
    const filterDirection = filterDirector(films, selected);
    printCards(filterDirection);
  });

  btnOrderFilms.addEventListener('change', () => {
    const selection = btnOrderFilms.value;
    const sortFilms = sortedFilms(films, selection);
    printCards(sortFilms);
  });

  return container;
};
