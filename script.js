const api_key = "1c1ad1bdfc0b8f0cf862c774d22ef7b3";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherImage = document.querySelector(".weather-icon");
let weatherDiv = document.querySelector(".weather1");

async function checkWeather(city) {
  const response = await fetch(url + city + `&appid=${api_key}`);
  var data = await response.json();

  document.querySelector("#city").innerHTML = data.name;
  document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = `${Math.round(
    (18 / 5) * data.wind.speed
  )}km/h`;
  console.log(data);

  console.log(data.weather[0].main);
  // console.log(weatherImage.src)

  if (data.weather[0].main == "Rain") {
    weatherImage.src = "../images/raining.png";
  
  }
   else if (data.weather[0].main == "Clear") {
    weatherImage.src = "../images/sun.png";
  
  } 
  else if (data.weather[0].main == "Drizzle") {
    weatherImage.src = "../images/drizzle.png";
  
  }
   else if (data.weather[0].main == "Mist") {
    weatherImage.src = "../images/snow.png";
  
  }
  else if (data.weather[0].main == "Clouds") {
    weatherImage.src = "../images/clouds.png";
  
  } 
  else {
    weatherImage.src = "../images/cloudy.png";
  
  }
  
  weatherDiv.style.display = "block";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
