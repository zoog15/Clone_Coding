const API_KEY = "bc5d90860b0308f6bc37a8b50d23d6a1";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  // fetch는 promise, 바로 일어나지 않고 조금 있다가 일어남
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Cant' find you. no weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
