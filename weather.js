const weatherContainer = document.querySelector("#weather");

const WWO_CODES = {
    113: "Sunny",
    116: "PartlyCloudy",
    119: "Cloudy",
    122: "VeryCloudy",
    143: "Fog",
    176: "LightShowers",
    179: "LightSleetShowers",
    182: "LightSleet",
    185: "LightSleet",
    200: "ThunderyShowers",
    227: "LightSnow",
    230: "HeavySnow",
    248: "Fog",
    260: "Fog",
    263: "LightShowers",
    266: "LightRain",
    281: "LightSleet",
    284: "LightSleet",
    293: "LightRain",
    296: "LightRain",
    299: "HeavyShowers",
    302: "HeavyRain",
    305: "HeavyShowers",
    308: "HeavyRain",
    311: "LightSleet",
    314: "LightSleet",
    317: "LightSleet",
    320: "LightSnow",
    323: "LightSnowShowers",
    326: "LightSnowShowers",
    329: "HeavySnow",
    332: "HeavySnow",
    335: "HeavySnowShowers",
    338: "HeavySnow",
    350: "LightSleet",
    353: "LightShowers",
    356: "HeavyShowers",
    359: "HeavyRain",
    362: "LightSleetShowers",
    365: "LightSleetShowers",
    368: "LightSnowShowers",
    371: "HeavySnowShowers",
    374: "LightSleetShowers",
    377: "LightSleet",
    386: "ThunderyShowers",
    389: "ThunderyHeavyRain",
    392: "ThunderySnowShowers",
    395: "HeavySnowShowers",
};

const SUN_CODES = ["113", "116"];
const CLOUD_CODES = ["119", "122", "143", "179", "182", "185"];
const RAIN_CODES = [
    "176",
    "200",
    "248",
    "260",
    "263",
    "266",
    "281",
    "284",
    "293",
    "296",
    "299",
    "302",
    "305",
    "308",
    "350",
    "353",
    "356",
    "359",
    "362",
    "365",
    "374",
    "377",
    "386",
    "389",
];
const SNOW_CODES = [
    "227",
    "230",
    "311",
    "314",
    "317",
    "320",
    "323",
    "326",
    "329",
    "332",
    "335",
    "338",
    "368",
    "371",
    "392",
    "395",
];

/**
 * @typedef {object} weatherData
 * @property {object[]} current_condition
 * @property {string} current_condition.FeelsLikeC
 * @property {string} current_condition.FeelsLikeF
 * @property {string} current_condition.cloudcover
 * @property {string} current_condition.humidity
 * @property {string} current_condition.localObsDateTime
 * @property {string} current_condition.observation_time
 * @property {string} current_condition.precipInches
 * @property {string} current_condition.precipMM
 * @property {string} current_condition.pressure
 * @property {string} current_condition.pressureInches
 * @property {string} current_condition.temp_C
 * @property {string} current_condition.temp_F
 * @property {string} current_condition.uvIndex
 * @property {string} current_condition.visibility
 * @property {string} current_condition.visibilityMiles
 * @property {string} current_condition.weatherCode
 * @property {object[]} current_condition.weatherDesc
 * @property {string} current_condition.weatherDesc.value
 * @property {object[]} current_condition.weatherIconUrl
 * @property {string} current_condition.weatherIconUrl.value
 * @property {string} current_condition.winddir16Point
 * @property {string} current_condition.winddirDegree
 * @property {string} current_condition.windspeedKmph
 * @property {string} current_condition.windspeedMiles
 * @property {object[]} nearest_area
 * @property {object[]} nearest_area.areaName
 * @property {string} nearest_area.areaName.value
 * @property {object[]} nearest_area.country
 * @property {string} nearest_area.country.value
 * @property {string} nearest_area.latitude
 * @property {string} nearest_area.longitude
 * @property {string} nearest_area.population
 * @property {object[]} nearest_area.region
 * @property {string} nearest_area.region.value
 * @property {object[]} nearest_area.weatherUrl
 * @property {string} nearest_area.weatherUrl.value
 * @property {object[]} request
 * @property {string} request.query
 * @property {string} request.type
 * @property {weatherDayData[]} weather
 *
 * @typedef {object} weatherDayData
 *
 * @property {object[]} astronomy
 * @property {string} astronomy.moon_illumination
 * @property {string} astronomy.moon_phase
 * @property {string} astronomy.moonrise
 * @property {string} astronomy.moonset
 * @property {string} astronomy.sunrise
 * @property {string} astronomy.sunset
 * @property {string} avgtempC
 * @property {string} avgtempF
 * @property {string} date
 * @property {object[]} hourly
 * @property {string} hourly.DewPointC
 * @property {string} hourly.DewPointF
 * @property {string} hourly.FeelsLikeC
 * @property {string} hourly.FeelsLikeF
 * @property {string} hourly.HeatIndexC
 * @property {string} hourly.HeatIndexF
 * @property {string} hourly.WindChillC
 * @property {string} hourly.WindChillF
 * @property {string} hourly.WindGustKmph
 * @property {string} hourly.WindGustMiles
 * @property {string} hourly.chanceoffog
 * @property {string} hourly.chanceoffrost
 * @property {string} hourly.chanceofhightemp
 * @property {string} hourly.chanceofovercast
 * @property {string} hourly.chanceofrain
 * @property {string} hourly.chanceofremdry
 * @property {string} hourly.chanceofsnow
 * @property {string} hourly.chanceofsunshine
 * @property {string} hourly.chanceofthunder
 * @property {string} hourly.chanceofwindy
 * @property {string} hourly.cloudcover
 * @property {string} hourly.diffRad
 * @property {string} hourly.humidity
 * @property {string} hourly.precipInches
 * @property {string} hourly.precipMM
 * @property {string} hourly.pressure
 * @property {string} hourly.pressureInches
 * @property {string} hourly.shortRad
 * @property {string} hourly.tempC
 * @property {string} hourly.tempF
 * @property {string} hourly.time
 * @property {string} hourly.uvIndex
 * @property {string} hourly.visibility
 * @property {string} hourly.visibilityMiles
 * @property {string} hourly.weatherCode
 * @property {object[]} hourly.weatherDesc
 * @property {string} hourly.weatherDesc.value
 * @property {object[]} hourly.weatherIconUrl
 * @property {string} hourly.weatherIconUrl.value
 * @property {string} hourly.winddir16Point
 * @property {string} hourly.winddirDegree
 * @property {string} hourly.windspeedKmph
 * @property {string} hourly.windspeedMiles
 * @property {string} maxtempC
 * @property {string} maxtempF
 * @property {string} mintempC
 * @property {string} mintempF
 * @property {string} sunHour
 * @property {string} totalSnow_cm
 * @property {string} uvIndex
 *
 * @returns {Promise<weatherData>}
 */

async function fetchWeather() {
    const req = await fetch("https://wttr.in/Hannover?format=j1", {
        method: "GET",
        mode: "cors",
    });
    const res = await req.json();
    return res;
}

/**
 *
 * @param {weatherDayData} dayData
 * @returns {string}
 * @description Constructs a HTML string of a weather block for a given day.
 */
function renderWeatherBlock(dayData) {
    const { avgtempC, mintempC, maxtempC, date } = dayData;

    return `
        <div class="weather-block">
            <img src="${weatherCodeToIcon(
                dayData.hourly[4].weatherCode
            )}" alt="Weather Icon">
            <p class="day">${new Date(date).toLocaleDateString(undefined, { weekday: "long"})}</p>
            <p>Avg Temp: ${avgtempC}°C</p>
            <p>Min Temp: ${mintempC}°C</p>
            <p>Max Temp: ${maxtempC}°C</p>
            <p>Rain%: ${dayData.hourly[4].chanceofrain}</p>
        </div>
    `;
}

function renderTryAgainFetchWeather() {
    return `
        <div class="weather-block">
            <p>Could not fetch weather data.</p>
            <button id="try-again">Try Again</button>
        </div>
    `;
}

function weatherCodeToIcon(code) {
    if (SUN_CODES.includes(code)) {
        return "icons/sun.png";
    } else if (CLOUD_CODES.includes(code)) {
        return "icons/cloud.png";
    } else if (RAIN_CODES.includes(code)) {
        return "icons/rain.png";
    } else if (SNOW_CODES.includes(code)) {
        return "icons/snow.png";
    }
    return "icons/sun.png";
}

function onLoad() {
    fetchWeather().then((weatherData) => {
        const weatherBlocks = weatherData.weather.map((day) =>
            renderWeatherBlock(day)
        );
    
        weatherContainer.innerHTML = weatherBlocks.join("");
    }).catch((err) => {
        console.error(err);
        weatherContainer.innerHTML = renderTryAgainFetchWeather();
        const tryAgainButton = weatherContainer.querySelector("#try-again");
        
        tryAgainButton.addEventListener("click", () => {
            weatherContainer.innerHTML = "";
            onLoad();
        });
    }
    );
}

onLoad();

