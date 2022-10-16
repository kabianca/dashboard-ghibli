import data from '../../data/ghibli/ghibli.js';

export default () => {
    const container = document.createElement("div");
    container.classList.add("container");
    
    container.innerHTML = `
        <div><canvas id="myChart"></canvas></div>
        `
    return container;
}
