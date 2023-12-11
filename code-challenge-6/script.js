
async function fetchWeatherData(city, callback) {
  const apiKey = '98ca9b5e67382226663e6d6406f492f2'; // Replace with your API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    callback(null, data);
  } catch (error) {
    callback(error, null);
  }
}

function displayWeatherInfo(error, data) {
  const weatherInfo = document.getElementById('weatherInfo');

  if (error) {
    weatherInfo.innerHTML = `<p>Error: ${error.message}</p>`;
  } else {
    const { name, main, weather } = data;
    const temperature = main.temp;
    const description = weather[0].description;

    weatherInfo.innerHTML = `<p>City: ${name}</p>
                            <p>Temperature: ${temperature}°C</p>
                            <p>Condition: ${description}</p>`;
  }
}

function getWeather() {
  const cityInput = document.getElementById('cityInput');
  const city = cityInput.value;

  if (!city) {
    alert('Please enter a city name.');
    return;
  }

  fetchWeatherData(city, displayWeatherInfo);
}
