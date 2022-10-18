import ghibli from '../../data/ghibli/ghibli.js';//eslint-disable-line

export default () => {
  const container = document.createElement('div');
  container.classList.add('container');

  container.innerHTML = `
    <section>
      <h1>Data Analysis</h1>
      <hr>
    </section>
    <table class="columns">
      <tr>
        <td><div id="myPlotSpecie" style="width:100%;max-width:500px"></div></td>
        <td><div id="myPlotGender" style="width:100%;max-width:500px"></div></td>
      </tr>
    </table>
    `;

  const { films } = ghibli;

  function listSpecie(obj) {
    const specieTotal = [];
    obj.map((film) => {
      const specie = film.people.map((person) => person.specie);
      return specieTotal.push(...specie);
    });
    return specieTotal;
  }

  const arraySpecie = listSpecie(films);
  const countSpecie = {};
  arraySpecie.forEach((element) => {
    countSpecie[element] = (countSpecie[element] || 0) + 1;
  });

  // gênero dos personagens
  function listGender(obj) {
    const genderTotal = [];
    obj.map((film) => {
      const gender = film.people.map((person) => person.gender);
      return genderTotal.push(...gender);
    });
    return genderTotal;
  }

  const arrayGender = listGender(films);
  const countGender = {};
  arrayGender.forEach((element) => {
    countGender[element] = (countGender[element] || 0) + 1;
  });

  // Ritmo de produção
  function listYear(obj) {
    const yearTotal = [];
    const year = obj.map((film) => film.release_date);
    yearTotal.push(...year);
    return yearTotal;
  }

  const arrayYear = listYear(films);
  const countYear = {};
  arrayYear.forEach((element) => {
    countYear[element] = (countYear[element] || 0) + 1;
  });

  // Column chart
  const xArray = Object.keys(countSpecie);
  const yArray = Object.values(countSpecie);

  const data = [{
    x: xArray,
    y: yArray,
    type: 'bar',
    marker: {
      color: '#1285c8',
    },
  }];

  const layout = { title: 'Species of the Ghibli Universe' };
  const myPlot = container.querySelector('#myPlotSpecie');

  Plotly.newPlot(myPlot, data, layout, {responsive: true});//eslint-disable-line

  // Pie chart
  const dataGender = [{
    values: Object.values(countGender),
    labels: Object.keys(countGender),
    type: 'pie',
  }];

  const layoutGender = { title: 'Character Gender Overview' };
  const myPlotGender = container.querySelector('#myPlotGender');
  Plotly.newPlot(myPlotGender, dataGender, layoutGender);//eslint-disable-line

  return container;
};
