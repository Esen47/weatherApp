class Forecast{
    constructor(){
        this.key = 'JAhV0BjvjtNa8c3pC2YXTqWP88qAHDnL';
        this.weatherURI = 'https://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async getWeatherInfo(city){
        const cityDetails = await this.getCity(city);
        const weatherDetails = await this.getWeather(cityDetails.Key);
        //using object shorthand notation
        return { cityDetails, weatherDetails }
    };
    //get city information
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
        return data[0];  
    };
    //get weather information
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
        return data[0];
    };
}


