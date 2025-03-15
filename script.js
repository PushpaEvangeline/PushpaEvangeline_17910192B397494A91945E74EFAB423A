const apiKey = "85580bdd61b9979df73b1eb9c7b09c79";
document.getElementById("searchBtn").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value;
    if (!city) return alert("Please enter a city name");

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                document.getElementById("weatherInfo").innerHTML = "City not found!";
                return;
            }
            const { temp, humidity } = data.main;
            const description = data.weather[0].description;
            const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            
            document.getElementById("weatherInfo").innerHTML = `
                <h2>${city}</h2>
                <img src="${icon}" alt="Weather Icon">
                <p>Temperature: ${temp} &#176;C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Condition: ${description}</p>
            `;
        })
        .catch(error => console.error("Error fetching data:", error));
});
