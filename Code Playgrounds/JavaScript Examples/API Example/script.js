const apiKey = "b88836fd37524876961235759252812";
const button = document.getElementById("getWeather");
const weatherText = document.getElementById("weather");

button.addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temp = data.current.temp_f;
      const condition = data.current.condition.text;

      weatherText.textContent = `It is ${temp}°F and ${condition}`;
    })
    .catch(error => {
      weatherText.textContent = "Error getting weather data";
      console.error(error);
    });
});
