const API_KEY = "5c69c93fb483850c3dc474011b3337aa";

const weather = document.querySelector("#GPS span:first-child");
const city = document.querySelector("#GPS span:last-child");

navigator.geolocation.getCurrentPosition(gpsGet, gpsError);

function gpsGet(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        city.innerText = data.name;
        weather.innerText = `${data.main.temp} | ${data.weather[0].main}`;
    });
}

function gpsError() {
    alert("위치를 찾을 수 없습니다!")
}