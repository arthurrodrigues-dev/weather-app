const API_KEY = "ed9a947c9a2149c5cca5d22f4a0f7434";
const submitButton = document.getElementById("submit-button");
const input = document.getElementById('input-city');

const getWeather = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=${API_KEY}`);
        const responseJSON = await response.json();

        const cityName = responseJSON.name;
        const celsiusTemperature = responseJSON.main.temp - 273.15;
        const humidity = responseJSON.main.humidity;
        const windSpeed = responseJSON.wind.speed * 3.6;

        return {
            "name": cityName,
            "temp": celsiusTemperature,
            "humidity": humidity,
            "wind-speed": windSpeed,
        };

    } catch (error) {
        alert("Error! Type a valid city");
    }
}

const atualizeData = async (city) => {
    const temperatureH1 = document.querySelector('.temperature');
    const cityH2 = document.querySelector('.city');
    const humidityP = document.querySelector('.humidity');
    const windP = document.querySelector('.wind');

    const filteredData = await getWeather(city);
    const temperature = parseInt(filteredData.temp);
    const humidity = parseInt(filteredData.humidity);
    const wind = parseInt(filteredData['wind-speed']);

    temperatureH1.innerHTML = `${temperature} &deg;C`;
    cityH2.innerHTML = filteredData.name;
    humidityP.innerHTML = `${humidity}%`;
    windP.innerHTML = `${wind} km/h`;
}

submitButton.addEventListener('click', async () => {
    const city = input.value;
    atualizeData(city);
})

input.addEventListener('keyup', async (e) => {
    if (e.code === "Enter") {
        try {
            atualizeData(input.value);
        } catch (error) {
        }
    }
})