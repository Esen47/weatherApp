const addForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();

//function to update the UI with weather information
const updateUI = (data) => {
    //destructure properties
    const{ cityDetails, weatherDetails } = data;

    details.innerHTML = `
        <h5 class="my-2">${cityDetails.EnglishName}</h5>
        <div class="my-2">${weatherDetails.WeatherText}</div>
        <div class="display-5 my-2">
        <span>${weatherDetails.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
        </div>
    `;
    //update the night/day & icon images
    const iconSrc = `../img/icons/${weatherDetails.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    //setting condition using ternary operator
    let timeSrc = weatherDetails.IsDayTime ? 'img/day.svg' : 'img/night.svg'; 
    time.setAttribute('src', timeSrc);

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    //getting user input
    const city = addForm.city.value.trim();
    //reseting the input field
    addForm.reset();
    //calling the getWeather function using user input
    forecast.getWeatherInfo(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});
