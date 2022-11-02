import "./style.css";

const Weather = function () {
  const chooseCity = document.querySelector(".js--choose-city");
  const sendBtn = document.querySelector(".js--send");

  this.chooseCity =  () => {
    chooseCity.addEventListener('change', function()  {
      this.city = chooseCity.value
      
    })
  }

 

  this.sendInfo = function () {
    this.chooseCity()
  
    sendBtn.addEventListener('click', () => {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
      ).then((res) => res.json()).then((data) => console.log(data));
    })

  }

};

const weather = new Weather();
weather.sendInfo()


// sendBtn.addEventListener("click", function () {
//   fetch(
//     `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
//   )
//     .then((res) => res.json())
//     .then((data) => console.log(data));


// });


// chooseCity.addEventListener("change", function () {
//   let city = chooseCity.value;
//   console.log(city)
// });