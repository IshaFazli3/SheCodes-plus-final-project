
function formatDate(timestamp) {
let date = new Date(timestamp);
let hours = date.getHours();
  hours = `0${hours}`;
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = days[date.getDay()];
return `${day} ${hours}:${minutes}`
}



function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = doucment.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");
  
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.main.speed);
  dateElmenet.innerHTML = formatDate(response.data.dt = 1000);
  iconElement.setAttribute("src", "https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png");
  iconElement.setAttribute("alt", response.data.weather[0].description);
}


function search(city){
  let apiKey = "c7bc0ta3bd1b1ab473o02ceeefd78e44";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${city}&key={apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);

}


function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("city-input");
  search(cityInputElement.value);
}

  search("Seattle");

  let form = document.querySelector("search-form");
  form.addEventListener("submit", handleSubmit);