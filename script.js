const getStarted = document.getElementById('getStarted');
const popUp = document.getElementById('popUp');
const exit = document.getElementById('exit');
const searchBtn  = document.getElementById('searchBtn');
const weatherDetails = document.getElementById('weatherDetails');
const city = document.getElementById('city');
const searchCity = document.getElementById('searchCity').value;
const imgIcon = document.getElementById('imgIcon');
const prev = document.getElementById('prev');
const dayTime = document.getElementById('dayTime');
const description = document.getElementById('description');
const apiKey="d94ca0efe777cebdeea9d2b80f9f391b";
const cite = prompt();
const dataSet = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
// const iconId = data.weather[0].icon;
// const iconUrl = `http://openweathermap.org/img/w/${iconId}.png`;

// document.getElementById('weather-icon').src = iconUrl;

function dayTimes(){
    const currentDate = new Date();
    const day = currentDate.toLocaleDateString('en-US',{weekday:'long'});
    const currentTime = currentDate.toLocaleTimeString('en-US');

    dayTime.innerHTML = `${day}<br>${currentTime}`;
}

dayTimes()



fetch(dataSet+cite+`&appid=${apiKey}`)
    .then(promise => promise.json())
    .then(response =>{
        // city.innerHTML = response.name;
        document.querySelector(".city-name").innerHTML = response.name;
        document.querySelector(".degrees").innerHTML = response.main.temp +"°C";
        const iconId = response.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${iconId}.png`;
        document.getElementById('imgIconW').src = iconUrl;
        document.querySelector('.humid').innerHTML = response.main.humidity + "%";
        document.querySelector('.wind-speed').innerHTML = response.wind.speed + "km/h";
        description.innerHTML = response.weather[0].description;

    })

// async function checkWeather(){
//     const response = await fetch(dataSet);
//     var data = await response.json();

//     console.log(data);
    
//     document.querySelector("degrees").innerHTML = Math.floor(data.main.temp);
//     document.querySelector("city-name").innerHTML = data.name;
   
    
    
// }

// checkWeather()

fetch(dataSet+cite+`&appid=${apiKey}`)
    .then(promise =>promise.json())
    .then(results=>console.log(results ))


getStarted.addEventListener('click',e=>{
    popUp.removeAttribute("hidden");
})

exit.addEventListener('click',ex=>{
    popUp.setAttribute("hidden",true);
})

searchBtn.addEventListener('click',btn=>{
    btn.preventDefault();
    weatherDetails.style.visibility = "visible";
     city.innerHTML = searchCity.value;
    
})

prev.addEventListener('click',pre=>{
    pre.preventDefault();
    weatherDetails.style.visibility = "hidden";

})



