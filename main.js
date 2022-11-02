'use sctrict'
import "./style.css";


const Weather = function () {
  const chooseCity = document.querySelector(".js--choose-city");
  const sendBtn = document.querySelector(".js--send");
  const cityName = document.querySelector(".js--city-name");
  const cityTemp = document.querySelector(".js--temp");
  const cityPressure = document.querySelector(".js--pressure");
  const cityDescription = document.querySelector(".js--description");
  const cityHumidity = document.querySelector(".js--humidity");
  const citySpeed = document.querySelector(".js--speed");
  const cityDeg = document.querySelector(".js--deg");
  const cityIcon = document.querySelector(".js--icon");
  let cityIconvValue = "undefined";

  this.chooseCity = () => {
    chooseCity.addEventListener("change", () => {
      this.city = chooseCity.value;
      this.city === ""
        ? sendBtn.setAttribute("disabled", "disabled")
        : sendBtn.removeAttribute("disabled");
    });
  };

  this.sendInfo = function () {
    this.chooseCity();
    sendBtn.addEventListener("click", () => {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
      )
        .then((res) => res.json())
        .then((data) => {
          cityName.innerHTML = data.name;
          cityTemp.innerHTML = data.main.temp + "℃";
          cityPressure.innerHTML = data.main.pressure + " " + "hPa";
          cityDescription.innerHTML = data.weather.map((elem) => elem.description);
          cityHumidity.innerHTML = data.main.humidity + "%";
          citySpeed.innerHTML = data.wind.speed + " " + "km/h SSE";
          cityDeg.innerHTML = data.wind.deg;
          cityIconvValue = data.weather.map((elem) => elem.icon);
          cityIcon.src = `http://openweathermap.org/img/w/${cityIconvValue}.png `;
        });
    });
  };
};

const weather = new Weather();
weather.sendInfo();
