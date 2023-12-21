const getStarted = document.getElementById('getStarted');
const popUp = document.getElementById('popUp');
const exit = document.getElementById('exit');
const searchBtn  = document.getElementById('searchBtn');
const weatherDetails = document.getElementById('weatherDetails');
const city = document.getElementById('city');
const searchCity = document.getElementById('searchCity');
const prev = document.getElementById('prev');
const dataSet = "https://api.openweathermap.org/data/2.5/weather?lat=-26.0871908&lon=28.0124675&appid=d94ca0efe777cebdeea9d2b80f9f391b";

fetch(dataSet)
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
    searchCity.value = "";
})

prev.addEventListener('click',pre=>{
    pre.preventDefault();
    weatherDetails.style.visibility = "hidden";

})