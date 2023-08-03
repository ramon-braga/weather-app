const apiKey = "d08fe3e547e256be5c926780787b6c97";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".input-search input");
const searchBtn = document.querySelector(".btn-search a i");
const weatherImg = document.querySelector(".weather-img");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity-rate").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-speed").innerHTML = Math.round(data.main.feels_like) + "°C";

    if (data.weather[0].main === "Clouds"){
        weatherImg.src = "/img/clouds.png";

    }else if (data.weather[0].main === "Clear"){
        weatherImg.src = "/img/clear.png";

    }else if (data.weather[0].main === "Rain"){
        weatherImg.src = "/img/rain.png";

    }else if (data.weather[0].main === "Drizzle"){
        weatherImg.src = "/img/drizzle.png";

    }else if (data.weather[0].main === "Snow"){
        weatherImg.src = "/img/snow.png";

    }else{
        weatherImg.src = "/img/mist.png";
    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});