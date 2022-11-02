"use sctrict";
import "./style.css";

const Weather = function ({
  selectCity,
  btn,
  nameCity,
  tempCity,
  pressureCity,
  descriptionCity,
  humidityCity,
  speedCity,
  degCity,
  iconCity,
}) {
  const chooseCity = document.querySelector(selectCity);
  const sendBtn = document.querySelector(btn);
  const cityName = document.querySelector(nameCity);
  const cityTemp = document.querySelector(tempCity);
  const cityPressure = document.querySelector(pressureCity);
  const cityDescription = document.querySelector(descriptionCity);
  const cityHumidity = document.querySelector(humidityCity);
  const citySpeed = document.querySelector(speedCity);
  const cityDeg = document.querySelector(degCity);
  const cityIcon = document.querySelector(iconCity);

  this.chooseCity = () => {
    chooseCity.addEventListener("change", () => {
      this.city = chooseCity.value;
      this.setText();
      if (this.city === "") {
        sendBtn.setAttribute("disabled", "disabled");
      } else {
        sendBtn.removeAttribute("disabled");
      }
    });
  };
  this.setText = (values = {}) => {
    cityName.innerHTML = values.name || "";
    cityTemp.innerHTML = values.temp || "";
    cityPressure.innerHTML = values.pressure || "";
    cityDescription.innerHTML = values.description || "";
    cityHumidity.innerHTML = values.humidity || "";
    citySpeed.innerHTML = values.speed || "";
    cityDeg.innerHTML = values.deg || "";
    cityIcon.src = values.src || "";
  };

  this.sendInfo = function () {
    this.chooseCity();
    sendBtn.addEventListener("click", () => {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
      )
        .then((res) => res.json())
        .then((data) => {
          this.setText({
            name: data.name,
            temp: data.main.temp + "℃",
            pressuredata: data.main.pressure + " " + "hPa",
            description: data.weather.map((elem) => elem.description),
            humidity: data.main.humidity + "%",
            speed: data.wind.speed + " " + "km/h SSE",
            deg: data.wind.deg,
            src: `http://openweathermap.org/img/w/${data.weather.map(
              (elem) => elem.icon
            )}.png `,
          });
        });
    });
  };
};

const weather = new Weather({
  selectCity: ".js--choose-city",
  btn: ".js--send",
  nameCity: ".js--city-name",
  tempCity: ".js--temp",
  pressureCity: ".js--pressure",
  descriptionCity: ".js--description",
  humidityCity: ".js--humidity",
  speedCity: ".js--speed",
  degCity: ".js--deg",
  iconCity: ".js--icon",
});
weather.sendInfo();

const weather1 = new Weather({
  selectCity: ".js--choose-city1",
  btn: ".js--send1",
  nameCity: ".js--city-name1",
  tempCity: ".js--temp1",
  pressureCity: ".js--pressure1",
  descriptionCity: ".js--description1",
  humidityCity: ".js--humidity1",
  speedCity: ".js--speed1",
  degCity: ".js--deg1",
  iconCity: ".js--icon1",
});
weather1.sendInfo();
