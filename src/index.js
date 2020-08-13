let present = new Date();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let months = [
  "Jan",
  "Fev",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let date = present.getDate();
let hours = present.getHours();
let minutes = present.getMinutes();
let day = days[present.getDay()];
let month = months[present.getMonth()];

let h1 = document.querySelector("h1");
h1.innerHTML = `${day},${month} ${date} ${hours}:${minutes}`;

function showUpdatedTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#change").innerHTML = Math.round(
    response.data.main.temp
  );
}

function searchCity(city) {
  event.preventDefault();
  let apiKey = "78732a96a197e49d1d6f4f38b52eb633";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showUpdatedTemperature);
}

function handleInput(event) {
  event.preventDefault();
  let city = document.querySelector("#search-for-city").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "78732a96a197e49d1d6f4f38b52eb633";
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=38.7729508&lon=-9.1105767&appid=78732a96a197e49d1d6f4f38b52eb633&units=metric";
  console.log(apiUrl);
  axios.get(apiUrl).then(showUpdatedTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleInput);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);
