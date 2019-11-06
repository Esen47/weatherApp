const addForm = document.querySelector('form');

const getWeatherInfo = async (city) => {
    const cityDetails = await getCity(city);
    const weatherDetails = await getWeather(cityDetails.Key);

    //using object shorthand notation
    return { cityDetails, weatherDetails }
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    //getting user input
    const city = addForm.city.value.trim();
    //reseting the input field
    addForm.reset();
    //calling the getWeather function using user input
    getWeatherInfo(city)
    .then(data => console.log(data))
    .catch(err => console.log(err));
});