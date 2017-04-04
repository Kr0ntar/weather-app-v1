"use strict";

searchBox.addEventListener('submit', function(e) {
    e.preventDefault();
    searchWeather();
    searchBox.reset();
});

backBtn.addEventListener('click', function() {
    search.style.display = 'inline-block';
    weatherBox.style.display = 'none';
    tempBtn.style.display = 'none';
    backBtn.style.display = 'none';
    body.style.backgroundImage = 'url("./img/main.jpg")';
});

function searchWeather() {
    var cityName = searchCity.value;
    if (cityName.trim().length == 0) {
        return alert('Please enter a City Name');   
    }
    var http = new XMLHttpRequest();
    var apiKey = '9d541120415518673d3e14234e91c498';
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + apiKey;
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var method = 'GET';

    http.open(method, proxy + url);
    http.onreadystatechange = function() {
        if (http.readyState == XMLHttpRequest.DONE && http.status === 200) {
            var data = JSON.parse(http.responseText);
            var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
            weatherData.temperature = data.main.temp;
            updateWeather(weatherData);
        } else if (http.readyState === XMLHttpRequest.DONE) {
            return alert('Something went wrong!');
        }
    };

    loadingText.style.display = 'block';
    weatherBox.style.display = 'none';

    http.send();
}

function updateWeather(weatherData) {
    weatherCity.textContent = weatherData.cityName;
    weatherDescription.textContent = weatherData.description;
    weatherTemperature.textContent = weatherData.temperature;
    var clickState = 0;

    loadingText.style.display = 'none';
    search.style.display = 'none';
    weatherBox.style.display = 'block';
    tempBtn.style.display = 'inline-block';
    backBtn.style.display = 'inline-block';
    tempBtn.addEventListener('click', function() {
        if(clickState == 0) {
            weatherTemperature.textContent = ((parseInt(weatherData.temperature) - 32) / 1.8).toFixed(2) + 'C.';
            clickState = 1;
        } else {
            weatherTemperature.textContent = weatherData.temperature;            
            clickState = 0;
        }
    });
    weatherCondition(weatherDescription.textContent);
}