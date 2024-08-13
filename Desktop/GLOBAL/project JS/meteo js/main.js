const apiKey="25accae364ea51c88300d9b9dc062a41";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const SearchBox=document.querySelector(".search input");
const SearchBtn = document.querySelector(".search button");
const WeatherIcon=document.querySelector(".weater-icon");

async function checkWether(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"°C";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h"
    ;

    if(data.weather[0].main=="Clouds"){
        WeatherIcon.src="img/Clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        WeatherIcon.src="img/clear.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        WeatherIcon.src="img/Rain.png";
    }
    else if(data.weather[0].main=="Rain"){
        WeatherIcon.src="img/Rain.png";
    }
    else if(data.weather[0].main=="Mist"){
        WeatherIcon.src="img/mist.png";
    }
}
SearchBtn.addEventListener("click",()=>{
    checkWether(SearchBox.value);
})

