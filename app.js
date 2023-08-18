
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
  let windElement = document.querySelector("wind");
  let dateElement = document.querySelector("date");
  
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.main.speed);
  dateElmenet.innerHTML = formatDate(response.data.dt = 1000);
}

  let apiKey = "c7bc0ta3bd1b1ab473o02ceeefd78e44";
  let apiUrl = "https://api.shecodes.io/weather/v1/current?query=Lisbon&key=c7bc0ta3bd1b1ab473o02ceeefd78e44&units=metric";

  axios.get(apiUrl).then(displayTemperature);