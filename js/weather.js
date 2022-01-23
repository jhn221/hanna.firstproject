const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "aec9c75285c24dc5ff74b5df99b2d433"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}6&appid=${API_KEY}&units=metric`
    fetch(url)
     .then((response) => response.json())
     .then((data) => {
       city.innerText = data.name;
       weather.innerText = "Today weather is "+`${data.weather[0].main} / ${data.main.temp}°C in`;
     });
  }
  function onGeoError() {
    alert("Can't find you. please click 'allow'.");
  }
 
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);