async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '9045ee4325a34d58a2a185459252604';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.error) {
        document.getElementById('weatherInfo').innerHTML = `<p style="color:red;">${data.error.message}</p>`;
        return;
      }

      document.getElementById('weatherInfo').innerHTML = `
        <h3>${data.location.name}, ${data.location.country}</h3>
        <p><strong>Temperature:</strong> ${data.current.temp_c} °C</p>
        <p><strong>Condition:</strong> ${data.current.condition.text}</p>
        <img src="${data.current.condition.icon}" alt="Weather Icon">
        <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
        <p><strong>Wind:</strong> ${data.current.wind_kph} kph</p>
      `;

    } catch (error) {
      document.getElementById('weatherInfo').innerHTML = `<p style="color:red;">Failed to fetch data.</p>`;
    }
  }
