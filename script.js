const getStarted = document.getElementById('getStarted');
const popUp = document.getElementById('popUp');
const exit = document.getElementById('exit');
const searchBtn  = document.getElementById('searchBtn');
const weatherDetails = document.getElementById('weatherDetails');
const city = document.getElementById('city');
const searchCity = document.getElementById('searchCity');
const imgIcon = document.getElementById('imgIcon');
const back = document.getElementById('back');
const days = document.getElementById('days');
const times = document.getElementById('times');
const mainForecast =document.getElementById('mainForecast');
const description = document.getElementById('description');
const searchForm = document.getElementById("searchForm")
const apiKey="d94ca0efe777cebdeea9d2b80f9f391b";
const dataSet = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
  const fore =`https://api.openweathermap.org/data/2.5/forecast?units=metric&q=`

function dayTimes(){
    const currentDate = new Date();
    const day = currentDate.toLocaleDateString('en-US',{weekday:'long'});
    const currentTime = currentDate.toLocaleTimeString('en-US');
    times.innerHTML =`${currentTime}`
    days.innerHTML = `${day}`;
}

dayTimes()





getStarted.addEventListener('click',e=>{
    popUp.removeAttribute("hidden");
})

exit.addEventListener('click',ex=>{
    popUp.setAttribute("hidden",true);
})

searchCity.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        searchBtn.click(); 
    }
});





searchBtn.addEventListener('click',btn=>{
    btn.preventDefault();

    fetch(fore+searchCity.value+`&appid=${apiKey}`)
    .then(promise => promise.json())
    .then(response =>{
        console.log(response)
        
        document.querySelector(".place-name").innerHTML = response.city.name;
        document.querySelector(".monday-temp").innerHTML = Math.round(response.list[0].main.temp) +"°C";
        document.querySelector(".tuesday-temp").innerHTML = Math.round(response.list[8].main.temp) +"°C";
        document.querySelector(".wed-temp").innerHTML = Math.round(response.list[16].main.temp) +"°C";
        document.querySelector(".thurs-temp").innerHTML = Math.round(response.list[24].main.temp) +"°C";
        document.querySelector(".fri-temp").innerHTML = Math.round(response.list[32].main.temp) +"°C";
        document.querySelector(".wind-s").innerHTML ="Wind: "+ response.list[0].wind.speed+"km/h";
        document.querySelector(".hum").innerHTML = response.list[0].weather[0].description;
        document.querySelector(".wind-sT").innerHTML ="Wind: "+ response.list[8].wind.speed+"km/h";
        document.querySelector(".humT").innerHTML = response.list[8].weather[0].description;
        document.querySelector(".wind-sW").innerHTML ="Wind: "+ response.list[16].wind.speed+"km/h";
        document.querySelector(".humW").innerHTML = response.list[16].weather[0].description;
        document.querySelector(".wind-sS").innerHTML ="Wind: "+ response.list[24].wind.speed+"km/h";
        document.querySelector(".humS").innerHTML = response.list[24].weather[0].description;
        document.querySelector(".wind-sF").innerHTML ="Wind: "+ response.list[32].wind.speed+"km/h";
        document.querySelector(".humF").innerHTML = response.list[32].weather[0].description;
        document.querySelector(".mon-date").innerHTML =(response.list[0].dt_txt).toString().slice(2,10);
        document.querySelector(".tue-date").innerHTML =(response.list[8].dt_txt).toString().slice(2,10);
        document.querySelector(".wed-date").innerHTML =(response.list[16].dt_txt).toString().slice(2,10);
        document.querySelector(".thurs-date").innerHTML =(response.list[24].dt_txt).toString().slice(2,10);
        document.querySelector(".fri-date").innerHTML =(response.list[32].dt_txt).toString().slice(2,10);

        const mond = response.list[1].weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${mond}.png`;
        document.getElementById('monday').src = iconUrl;

        const tue = response.list[8].weather[0].icon;
        const iconUrl1 = `http://openweathermap.org/img/w/${tue}.png`;
        document.getElementById('tuesday').src = iconUrl1;

        const wed = response.list[16].weather[0].icon;
        const iconUrl2 = `http://openweathermap.org/img/w/${wed}.png`;
        document.getElementById('wednesday').src = iconUrl2;

        const thurs = response.list[24].weather[0].icon;
        const iconUrl3 = `http://openweathermap.org/img/w/${thurs}.png`;
        document.getElementById('thursday').src = iconUrl3;

        const fri = response.list[32].weather[0].icon;
        const iconUrl4 = `http://openweathermap.org/img/w/${fri}.png`;
        document.getElementById('friday').src = iconUrl4;


        
        

        searchCity.value="";

    })

    fetch(dataSet+searchCity.value+`&appid=${apiKey}`)
    .then(promise => promise.json())
    .then(response =>{
        console.log(response)

        const mond1 = response.weather[0].icon;
        const iconUrl6 = `http://openweathermap.org/img/w/${mond1}.png`;
        document.getElementById('currentWeatherImg').src = iconUrl6;

        document.querySelector(".wind-sp").innerHTML = response.wind.speed+" km/h";
        document.querySelector(".humid-perc").innerHTML = response.main.humidity+"%";
        document.querySelector(".desc").innerHTML = response.weather[0].description;
        document.querySelector(".main-desc").innerHTML = response.weather[0].main;
        document.querySelector(".presure").innerHTML = response.main.pressure;
        document.querySelector(".current-degree").innerHTML = Math.round(response.main.temp)+"°C";

    })

    mainForecast.style.visibility = "visible";
     city.innerHTML = searchCity.value;
    
})

back.addEventListener('click',pre=>{
    pre.preventDefault();
    mainForecast.style.visibility = "hidden";

})



