// Save your OpenWeatherMap API key
const apiKey = "YOUR_API_KEY_HERE"; // Replace with your OpenWeatherMap API key

// Add event listener for the form submission
document
  .getElementById("search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the form from submitting normally

    // Get the city input value
    const city = document.getElementById("city-input").value;

    // Fetch the weather data for the input city
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      )
      .then((response) => {
        const cityName = response.data.name;
        const temperature = Math.round(response.data.main.temp); // Round temperature to nearest whole number

        // Display the city name and current temperature
        document.getElementById(
          "result"
        ).innerText = `It is ${temperature} degrees in ${cityName}`;
      })
      .catch((error) => {
        // If the city is not found, display an error message
        document.getElementById(
          "result"
        ).innerText = `Sorry, we don't know the weather for this city. Try going to https://www.google.com/search?q=weather+${city}`;
      });
  });
