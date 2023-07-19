const API_KEY = "ed9a947c9a2149c5cca5d22f4a0f7434";

const getWeather = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        const responseJSON = await response.json();
    
        const kelvinTemperature = responseJSON['main'].temp
        
        return kelvinTemperature - 273.15;

    } catch (error) {
        alert("Erro! Digite uma cidade");
    }
}


const submitButton = document.getElementById("submit_button");

submitButton.addEventListener('click', async () => {
    const input = document.getElementById('input_city');
    const city = input.value;

    const celsiusTemperature = await getWeather(city);
    console.log(celsiusTemperature);
})
