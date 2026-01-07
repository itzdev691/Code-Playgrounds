const apiKey = "b88836fd37524876961235759252812";
const city = "Kansas City";

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
    );
    const data = await response.json();

    document.getElementById("city").textContent = data.location.name;
    document.getElementById("temp").textContent =
      `Temperature: ${data.current.temp_f}°F`;
    document.getElementById("condition").textContent =
      data.current.condition.text;

  } catch (error) {
    console.error("Weather error:", error);
  }
}

// ✅ Runs immediately when page loads
getWeather();

// 🔁 Optional auto-refresh every 10 minutes
setInterval(getWeather, 600000);
