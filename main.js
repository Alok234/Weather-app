console.log(" Something!");

const apikey="5d0f2ed6c3f5a8d0a1254df112082997";
const apilink="https://api.openweathermap.org/data/2.5/weather?q=";
const searchValue= document.querySelector(".input");
const btn = document.querySelector(".btn");
const weatherIcon=document.querySelector(".weatherIcon");


async function cheakWeather(city){
    const response = await fetch (apilink+ city + `&appid=${apikey}`);
    const data= await response.json();
    console.log(data);
    // if(city != data.name){
    //     alert("Please Cheak City name.");
        
    // }else{
    //     document.querySelector(".city").innerHTML=data.name;
    // }
    document.querySelector(".city").innerHTML=data.name;
    
    document.querySelector(".temp").innerHTML=data.main.temp+ "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML=data.wind.speed+ "Km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src ="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src ="images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src ="images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src ="images/drizzle.png";
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src ="images/snow.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src ="images/mist.png";
    }
}

btn.addEventListener("click",()=>{ 
    inputValue=searchValue.value;

   if(searchValue.value == ""){
    alert("You are a fool. Please Enter city name");
   }
   else{

    cheakWeather(inputValue[0].toUpperCase() + inputValue.slice(1));

   }
});

