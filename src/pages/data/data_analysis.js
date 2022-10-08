// import data from '../../data/ghibli/ghibli.js';

export default () => {
    const container = document.createElement("div");
    container.classList.add("container");
    
    container.innerHTML = `
        <section>
            <h1>Ghibli Dashboard</h1>
            <hr>
            <div id="chartGender" style="max-width:700px; height:400px"></div>
            <div id="chartSpecie" style="max-width:700px; height:400px"></div>
            <div id="chartDirector" style="max-width:700px; height:400px"></div>
        </section>
        `

    
    return container;
}