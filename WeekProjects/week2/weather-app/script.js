const API_KEY = "dbaf0bd0a1d3b8eec174dc8c164a5c08";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");

// Run when Search button is clicked
searchBtn.addEventListener("click", function () {
    const city = cityInput.value.trim();

    if (city === "") {
        weatherResult.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    getWeather(city);
});
cityInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchBtn.click();
    }
});

// Function to fetch weather data
async function getWeather(city) {
    weatherResult.innerHTML = `
    <div class="loading">
        <p>⏳ Fetching weather...</p>
    </div>
    `;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        const weatherCondition = data.weather[0].main;

        if (weatherCondition === "Clear") {
            document.body.style.background = "linear-gradient(135deg, #74b9ff, #ffeaa7)";
        } else if (weatherCondition === "Clouds") {
            document.body.style.background = "linear-gradient(135deg, #b2bec3, #dfe6e9)";
        } else if (weatherCondition === "Rain") {
            document.body.style.background = "linear-gradient(135deg, #636e72, #74b9ff)";
        } else if (weatherCondition === "Thunderstorm") {
            document.body.style.background = "linear-gradient(135deg, #2d3436, #6c5ce7)";
        } else {
            document.body.style.background = "linear-gradient(135deg, #74b9ff, #81ecec)";
        }

        weatherResult.innerHTML = `
            <div class="weather-card">
                <h2>${data.name}, ${data.sys.country}</h2>

                <img
                    src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
                    alt="${data.weather[0].description}"
                >

                <div class="temperature">
                    ${Math.round(data.main.temp)}°C
                </div>

                <p class="description">
                    ${data.weather[0].description}
                </p>

                <div class="weather-details">
                    <p>💧 Humidity: ${data.main.humidity}%</p>
                    <p>💨 Wind: ${data.wind.speed} m/s</p>
                    <p>🌡️ Feels like: ${Math.round(data.main.feels_like)}°C</p>
                </div>
            </div>
        `;


    } catch (error) {
        weatherResult.innerHTML = `<p>${error.message}</p>`;
    }
}