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
      <thead>
        <tr>
          <th id="title-word-cloud"><p>Character Gender Overview</p></td>
          <th id="title-word-cloud"><p>Species of the Ghibli Universe</p></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><p id="title-mobile">Character Gender Overview</p><div id="myPlotGender"></div></td>
          <td><p id="title-mobile">Species of the Ghibli Universe</p><img id="word-cloud" src="../../assets/wordcloud.png" alt="Species of the Ghibli Universe"></td>
        </tr>
        <tr>
          <td>Studio Ghibli produces approximately <strong id="data">1 movie every 2 years</strong>, with the exception of the years
          1988 and 2013 responsible for the release of 2 movies each.</td>
          <td><strong id="data">40% of the movies </strong> in the Ghibli Universe are populated mostly by characters of the human species. The other
          species with greater numbers assume the main role in some production.</td>    
        </tr>
      </tbody>
    </table>
    `;

  const { films } = ghibli;

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
    autosize: false,
    width: 500,
    height: 400,
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
