const baseURL = 'https://api.nasa.gov/techtransfer/software/?engine&api_key=bg9H6OM1WqeJbDCkkpHuHZdZ8LxXQ4oksHX79ha1'


const prototypeName = document.getElementById('prototypeName');
const softwareType = document.getElementById('softwareType')
const button = document.getElementById('button');
const gitRepository = document.getElementById('gitRepository');
button.addEventListener('click', fetchNasaData);
const githubLink = document.getElementById('githubLink');



//fetch

async function fetchNasaData() {
    const response = await fetch(`${baseURL}`);
    console.log(response);
    const json = await response.json();
    console.log(json)
    displayData(json)
}

//display

const displayData = (data) => {
    const randResult = Math.floor(Math.random() * (38 - 2) + 2);
    const mapResult = data.results[randResult].map((item) => item)
    console.log(mapResult, 'No Repository');

    const mappedData = data.results.map((item) => {
        return {
            pattenNumber: item[0],
            pattenName: item[1],
            softwareType: item[2],
            softwareDescription: item[3],
            pattenID: item[4],
            pattenType: item[5],
            pattenUse: item[6],
            pattenNothing: item[7],
            pattenGithub: item[8],
            pattenAbbreviation: item[9],
            pattenNada: item[10],
            pattenUse: item[11],
            pattenLocation: item[12],
        }
    })
    prototypeName.innerText = (data.results[randResult][5]);
    softwareType.innerText = (data.results[randResult][2]);
    softwareDescription.innerText = (data.results[randResult][3]);
    githubLink.setAttribute("href",`${mappedData[randResult]?.pattenGithub}`);
    




}

fetchNasaData()

