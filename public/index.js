const baseURL = 'https://api.nasa.gov/techtransfer/software/?engine&api_key=bg9H6OM1WqeJbDCkkpHuHZdZ8LxXQ4oksHX79ha1'


const prototypeName = document.getElementById('prototypeName');
const softwareType = document.getElementById('softwareType')
const button = document.getElementById('button');
const gitRepository = document.getElementById('gitRepository')
button.addEventListener('click', fetchNasaData)

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
    const mapResult = data.results[randResult].map((item)=> item)
    console.log(mapResult, 'someString');
    prototypeName.innerText = (data.results[randResult][5]);
    softwareType.innerText = (data.results[randResult][2]);
    softwareDescription.innerText = (data.results[randResult][3]);
    gitRepository.querySelector.innerText = (data.results[randResult][8]);

}

fetchNasaData()

