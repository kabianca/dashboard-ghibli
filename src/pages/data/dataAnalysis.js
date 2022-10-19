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
        <td><p id="title-word-cloud">Character Gender Overview</p></td>
        <td><p id="title-word-cloud">Species of the Ghibli Universe</p></td>
      </tr>
      <tr>
        <td><div id="myPlotGender" style="width:100%;max-width:700px"></div></td>
        <td><img src="../../assets/wordcloud.png" alt="Species of the Ghibli Universe" style="width:100%;max-width:700px"></td>
      </tr>
    </table>
    <div id="description">
      <p id="left">Studio Ghibli produces approximately <strong id="data">1 movie every 2 years</strong>, with the exception of the years
      1988 and 2013 responsible for the release of 2 movies each.</p>
      <p id="right"><strong id="data">40% of the movies </strong> in the Ghibli Universe are populated mostly by characters of the human species. The other
      species with greater numbers assume the main role in some production.</p>
    </div>
    `;

  const { films } = ghibli;

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

  // Column chart
  const myPlot = container.querySelector('#myPlotGender');
  const xArray = Object.keys(countGender);
  const yArray = Object.values(countGender);
  const config = { responsive: true };

  const data = [{
    x: xArray,
    y: yArray,
    type: 'bar',
    marker: {
      color: '#1285c8',
    },
  }];

  const layout = {
    // title: 'Character Gender Overview',
    plot_bgcolor: '#272727',
    paper_bgcolor: '#272727',
    font: {
      color: '#FFFFFF',
      family: 'serif',
    },
  };

  Plotly.newPlot(myPlot, data, layout, config);//eslint-disable-line

  return container;
};
