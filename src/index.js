import "./styles.css";
import { format, addDays } from "date-fns";

import thermometercolder from "./WeatherIcons/thermometer-colder.svg";
import snowflake from "./WeatherIcons/snowflake.svg";
import moonwaningcrescent from "./WeatherIcons/moon-waning-crescent.svg";
import thunderstormsdayovercastsnow from "./WeatherIcons/thunderstorms-day-overcast-snow.svg";
import timeafternoon from "./WeatherIcons/time-afternoon.svg";
import thermometermercurycold from "./WeatherIcons/thermometer-mercury-cold.svg";
import hail from "./WeatherIcons/hail.svg";
import haze from "./WeatherIcons/haze.svg";
import tornado from "./WeatherIcons/tornado.svg";
import thunderstormsday from "./WeatherIcons/thunderstorms-day.svg";
import mist from "./WeatherIcons/mist.svg";
import overcastnightsnow from "./WeatherIcons/overcast-night-snow.svg";
import partlycloudynighthaze from "./WeatherIcons/partly-cloudy-night-haze.svg";
import thunderstormsovercast from "./WeatherIcons/thunderstorms-overcast.svg";
import thermometermercury from "./WeatherIcons/thermometer-mercury.svg";
import partlycloudynightsleet from "./WeatherIcons/partly-cloudy-night-sleet.svg";
import uvindex1 from "./WeatherIcons/uv-index-1.svg";
import thunderstormssnow from "./WeatherIcons/thunderstorms-snow.svg";
import thermometercelsius from "./WeatherIcons/thermometer-celsius.svg";
import extremedaysmoke from "./WeatherIcons/extreme-day-smoke.svg";
import windbeaufort3 from "./WeatherIcons/wind-beaufort-3.svg";
import uvindex9 from "./WeatherIcons/uv-index-9.svg";
import hazeday from "./WeatherIcons/haze-day.svg";
import overcastfog from "./WeatherIcons/overcast-fog.svg";
import timelateevening from "./WeatherIcons/time-late-evening.svg";
import glove from "./WeatherIcons/glove.svg";
import overcasthaze from "./WeatherIcons/overcast-haze.svg";
import overcastdaysleet from "./WeatherIcons/overcast-day-sleet.svg";
import partlycloudynightrain from "./WeatherIcons/partly-cloudy-night-rain.svg";
import flaggalewarning from "./WeatherIcons/flag-gale-warning.svg";
import thermometerwarmer from "./WeatherIcons/thermometer-warmer.svg";
import thermometerglasscelsius from "./WeatherIcons/thermometer-glass-celsius.svg";
import sunrise from "./WeatherIcons/sunrise.svg";
import thermometersnow from "./WeatherIcons/thermometer-snow.svg";
import extremesnow from "./WeatherIcons/extreme-snow.svg";
import uvindex10 from "./WeatherIcons/uv-index-10.svg";
import uvindex2 from "./WeatherIcons/uv-index-2.svg";
import overcastnighthail from "./WeatherIcons/overcast-night-hail.svg";
import extremedayhaze from "./WeatherIcons/extreme-day-haze.svg";
import windbeaufort9 from "./WeatherIcons/wind-beaufort-9.svg";
import extremenightfog from "./WeatherIcons/extreme-night-fog.svg";
import sunhot from "./WeatherIcons/sun-hot.svg";
import overcastdrizzle from "./WeatherIcons/overcast-drizzle.svg";
import thermometerraindrop from "./WeatherIcons/thermometer-raindrop.svg";
import extremedaysnow from "./WeatherIcons/extreme-day-snow.svg";
import partlycloudynightdrizzle from "./WeatherIcons/partly-cloudy-night-drizzle.svg";
import moonlastquarter from "./WeatherIcons/moon-last-quarter.svg";
import solareclipse from "./WeatherIcons/solar-eclipse.svg";
import raindrop from "./WeatherIcons/raindrop.svg";
import extremehaze from "./WeatherIcons/extreme-haze.svg";
import raindropmeasure from "./WeatherIcons/raindrop-measure.svg";
import hazenight from "./WeatherIcons/haze-night.svg";
import overcastdaydrizzle from "./WeatherIcons/overcast-day-drizzle.svg";
import moonfull from "./WeatherIcons/moon-full.svg";
import thunderstormsnight from "./WeatherIcons/thunderstorms-night.svg";
import partlycloudynightsnow from "./WeatherIcons/partly-cloudy-night-snow.svg";
import overcastnight from "./WeatherIcons/overcast-night.svg";
import thunderstormsnightextremesnow from "./WeatherIcons/thunderstorms-night-extreme-snow.svg";
import partlycloudydaysnow from "./WeatherIcons/partly-cloudy-day-snow.svg";
import umbrella from "./WeatherIcons/umbrella.svg";
import celsius from "./WeatherIcons/celsius.svg";
import humidity from "./WeatherIcons/humidity.svg";
import windbeaufort7 from "./WeatherIcons/wind-beaufort-7.svg";
import uvindex4 from "./WeatherIcons/uv-index-4.svg";
import dustday from "./WeatherIcons/dust-day.svg";
import thunderstormsnightsnow from "./WeatherIcons/thunderstorms-night-snow.svg";
import flagstormwarning from "./WeatherIcons/flag-storm-warning.svg";
import uvindex3 from "./WeatherIcons/uv-index-3.svg";
import timelateafternoon from "./WeatherIcons/time-late-afternoon.svg";
import extremesmoke from "./WeatherIcons/extreme-smoke.svg";
import thunderstormsextreme from "./WeatherIcons/thunderstorms-extreme.svg";
import alertfallingrocks from "./WeatherIcons/alert-falling-rocks.svg";
import overcastrain from "./WeatherIcons/overcast-rain.svg";
import star from "./WeatherIcons/star.svg";
import windbeaufort1 from "./WeatherIcons/wind-beaufort-1.svg";
import partlycloudydaysmoke from "./WeatherIcons/partly-cloudy-day-smoke.svg";
import extremenightrain from "./WeatherIcons/extreme-night-rain.svg";
import clearday from "./WeatherIcons/clear-day.svg";
import windalert from "./WeatherIcons/wind-alert.svg";
import flagsmallcraftadvisory from "./WeatherIcons/flag-small-craft-advisory.svg";
import partlycloudynightfog from "./WeatherIcons/partly-cloudy-night-fog.svg";
import overcastnightsmoke from "./WeatherIcons/overcast-night-smoke.svg";
import hurricane from "./WeatherIcons/hurricane.svg";
import thunderstormsextremesnow from "./WeatherIcons/thunderstorms-extreme-snow.svg";
import thunderstormsnightovercastsnow from "./WeatherIcons/thunderstorms-night-overcast-snow.svg";
import compass from "./WeatherIcons/compass.svg";
import overcastnighthaze from "./WeatherIcons/overcast-night-haze.svg";
import thermometer from "./WeatherIcons/thermometer.svg";
import extremerain from "./WeatherIcons/extreme-rain.svg";
import overcasthail from "./WeatherIcons/overcast-hail.svg";
import windbeaufort2 from "./WeatherIcons/wind-beaufort-2.svg";
import windbeaufort4 from "./WeatherIcons/wind-beaufort-4.svg";
import pressurehighalt from "./WeatherIcons/pressure-high-alt.svg";
import extremenightdrizzle from "./WeatherIcons/extreme-night-drizzle.svg";
import extremefog from "./WeatherIcons/extreme-fog.svg";
import snowman from "./WeatherIcons/snowman.svg";
import overcastdaysnow from "./WeatherIcons/overcast-day-snow.svg";
import windbeaufort11 from "./WeatherIcons/wind-beaufort-11.svg";
import windsock from "./WeatherIcons/windsock.svg";
import extremeday from "./WeatherIcons/extreme-day.svg";
import extremenight from "./WeatherIcons/extreme-night.svg";
import timenight from "./WeatherIcons/time-night.svg";
import overcastnightdrizzle from "./WeatherIcons/overcast-night-drizzle.svg";
import overcastdayrain from "./WeatherIcons/overcast-day-rain.svg";
import partlycloudydayfog from "./WeatherIcons/partly-cloudy-day-fog.svg";
import windsockweak from "./WeatherIcons/windsock-weak.svg";
import fog from "./WeatherIcons/fog.svg";
import drizzle from "./WeatherIcons/drizzle.svg";
import windbeaufort12 from "./WeatherIcons/wind-beaufort-12.svg";
import clouddown from "./WeatherIcons/cloud-down.svg";
import codered from "./WeatherIcons/code-red.svg";
import flaghurricanewarning from "./WeatherIcons/flag-hurricane-warning.svg";
import raindrops from "./WeatherIcons/raindrops.svg";
import uvindex6 from "./WeatherIcons/uv-index-6.svg";
import overcastsmoke from "./WeatherIcons/overcast-smoke.svg";
import alertavalanchedanger from "./WeatherIcons/alert-avalanche-danger.svg";
import overcast from "./WeatherIcons/overcast.svg";
import extremedaydrizzle from "./WeatherIcons/extreme-day-drizzle.svg";
import thunderstormsdaysnow from "./WeatherIcons/thunderstorms-day-snow.svg";
import extremenightsmoke from "./WeatherIcons/extreme-night-smoke.svg";
import extremesleet from "./WeatherIcons/extreme-sleet.svg";
import partlycloudydayrain from "./WeatherIcons/partly-cloudy-day-rain.svg";
import windbeaufort8 from "./WeatherIcons/wind-beaufort-8.svg";
import partlycloudynight from "./WeatherIcons/partly-cloudy-night.svg";
import codeorange from "./WeatherIcons/code-orange.svg";
import partlycloudydaydrizzle from "./WeatherIcons/partly-cloudy-day-drizzle.svg";
import starrynight from "./WeatherIcons/starry-night.svg";
import moonwaninggibbous from "./WeatherIcons/moon-waning-gibbous.svg";
import thermometerglass from "./WeatherIcons/thermometer-glass.svg";
import thunderstormsnightextreme from "./WeatherIcons/thunderstorms-night-extreme.svg";
import thunderstormsnightovercast from "./WeatherIcons/thunderstorms-night-overcast.svg";
import extreme from "./WeatherIcons/extreme.svg";
import extremenightsleet from "./WeatherIcons/extreme-night-sleet.svg";
import thunderstormsdayextreme from "./WeatherIcons/thunderstorms-day-extreme.svg";
import overcastnightrain from "./WeatherIcons/overcast-night-rain.svg";
import overcastdayhaze from "./WeatherIcons/overcast-day-haze.svg";
import partlycloudynighthail from "./WeatherIcons/partly-cloudy-night-hail.svg";
import extremenightsnow from "./WeatherIcons/extreme-night-snow.svg";
import thunderstormsdayovercastrain from "./WeatherIcons/thunderstorms-day-overcast-rain.svg";
import umbrellawind from "./WeatherIcons/umbrella-wind.svg";
import overcastdayfog from "./WeatherIcons/overcast-day-fog.svg";
import dust from "./WeatherIcons/dust.svg";
import dustwind from "./WeatherIcons/dust-wind.svg";
import moonnew from "./WeatherIcons/moon-new.svg";
import thermometerglassfahrenheit from "./WeatherIcons/thermometer-glass-fahrenheit.svg";
import wind from "./WeatherIcons/wind.svg";
import fallingstars from "./WeatherIcons/falling-stars.svg";
import partlycloudydayhail from "./WeatherIcons/partly-cloudy-day-hail.svg";
import thunderstormsrain from "./WeatherIcons/thunderstorms-rain.svg";
import thunderstormsextremerain from "./WeatherIcons/thunderstorms-extreme-rain.svg";
import overcastsnow from "./WeatherIcons/overcast-snow.svg";
import clearnight from "./WeatherIcons/clear-night.svg";
import notavailable from "./WeatherIcons/not-available.svg";
import windbeaufort10 from "./WeatherIcons/wind-beaufort-10.svg";
import extremedaysleet from "./WeatherIcons/extreme-day-sleet.svg";
import moonrise from "./WeatherIcons/moonrise.svg";
import tidehigh from "./WeatherIcons/tide-high.svg";
import uvindex from "./WeatherIcons/uv-index.svg";
import codeyellow from "./WeatherIcons/code-yellow.svg";
import rainbowclear from "./WeatherIcons/rainbow-clear.svg";
import snow from "./WeatherIcons/snow.svg";
import smoke from "./WeatherIcons/smoke.svg";
import windbeaufort0 from "./WeatherIcons/wind-beaufort-0.svg";
import pollenflower from "./WeatherIcons/pollen-flower.svg";
import extremenighthail from "./WeatherIcons/extreme-night-hail.svg";
import thunderstormsnightrain from "./WeatherIcons/thunderstorms-night-rain.svg";
import overcastdayhail from "./WeatherIcons/overcast-day-hail.svg";
import moonfirstquarter from "./WeatherIcons/moon-first-quarter.svg";
import rainbow from "./WeatherIcons/rainbow.svg";
import extremenighthaze from "./WeatherIcons/extreme-night-haze.svg";
import windsnow from "./WeatherIcons/wind-snow.svg";
import lightningbolt from "./WeatherIcons/lightning-bolt.svg";
import thermometerfahrenheit from "./WeatherIcons/thermometer-fahrenheit.svg";
import uvindex5 from "./WeatherIcons/uv-index-5.svg";
import pollen from "./WeatherIcons/pollen.svg";
import timelatemorning from "./WeatherIcons/time-late-morning.svg";
import extremedrizzle from "./WeatherIcons/extreme-drizzle.svg";
import timeevening from "./WeatherIcons/time-evening.svg";
import thunderstormsdayextremesnow from "./WeatherIcons/thunderstorms-day-extreme-snow.svg";
import beanie from "./WeatherIcons/beanie.svg";
import pressurelowalt from "./WeatherIcons/pressure-low-alt.svg";
import windbeaufort5 from "./WeatherIcons/wind-beaufort-5.svg";
import thermometerwater from "./WeatherIcons/thermometer-water.svg";
import pressurehigh from "./WeatherIcons/pressure-high.svg";
import extremedayrain from "./WeatherIcons/extreme-day-rain.svg";
import extremedayfog from "./WeatherIcons/extreme-day-fog.svg";
import pressurelow from "./WeatherIcons/pressure-low.svg";
import uvindex7 from "./WeatherIcons/uv-index-7.svg";
import partlycloudyday from "./WeatherIcons/partly-cloudy-day.svg";
import thunderstormsdayrain from "./WeatherIcons/thunderstorms-day-rain.svg";
import overcastdaysmoke from "./WeatherIcons/overcast-day-smoke.svg";
import thunderstorms from "./WeatherIcons/thunderstorms.svg";
import timelatenight from "./WeatherIcons/time-late-night.svg";
import overcastsleet from "./WeatherIcons/overcast-sleet.svg";
import thunderstormsovercastrain from "./WeatherIcons/thunderstorms-overcast-rain.svg";
import thunderstormsdayextremerain from "./WeatherIcons/thunderstorms-day-extreme-rain.svg";
import cloudup from "./WeatherIcons/cloud-up.svg";
import codegreen from "./WeatherIcons/code-green.svg";
import overcastnightfog from "./WeatherIcons/overcast-night-fog.svg";
import umbrellawindalt from "./WeatherIcons/umbrella-wind-alt.svg";
import fognight from "./WeatherIcons/fog-night.svg";
import fogday from "./WeatherIcons/fog-day.svg";
import moonset from "./WeatherIcons/moonset.svg";
import smokeparticles from "./WeatherIcons/smoke-particles.svg";
import uvindex8 from "./WeatherIcons/uv-index-8.svg";
import pollentree from "./WeatherIcons/pollen-tree.svg";
import overcastnightsleet from "./WeatherIcons/overcast-night-sleet.svg";
import fahrenheit from "./WeatherIcons/fahrenheit.svg";
import thermometersun from "./WeatherIcons/thermometer-sun.svg";
import thunderstormsnightovercastrain from "./WeatherIcons/thunderstorms-night-overcast-rain.svg";
import dustnight from "./WeatherIcons/dust-night.svg";
import thunderstormsnightextremerain from "./WeatherIcons/thunderstorms-night-extreme-rain.svg";
import extremedayhail from "./WeatherIcons/extreme-day-hail.svg";
import windoffshore from "./WeatherIcons/wind-offshore.svg";
import moonwaxinggibbous from "./WeatherIcons/moon-waxing-gibbous.svg";
import partlycloudydaysleet from "./WeatherIcons/partly-cloudy-day-sleet.svg";
import thunderstormsovercastsnow from "./WeatherIcons/thunderstorms-overcast-snow.svg";
import sleet from "./WeatherIcons/sleet.svg";
import barometer from "./WeatherIcons/barometer.svg";
import uvindex11 from "./WeatherIcons/uv-index-11.svg";
import tidelow from "./WeatherIcons/tide-low.svg";
import partlycloudynightsmoke from "./WeatherIcons/partly-cloudy-night-smoke.svg";
import cloudy from "./WeatherIcons/cloudy.svg";
import sunset from "./WeatherIcons/sunset.svg";
import thermometermoon from "./WeatherIcons/thermometer-moon.svg";
import moonwaxingcrescent from "./WeatherIcons/moon-waxing-crescent.svg";
import windbeaufort6 from "./WeatherIcons/wind-beaufort-6.svg";
import thunderstormsdayovercast from "./WeatherIcons/thunderstorms-day-overcast.svg";
import timemorning from "./WeatherIcons/time-morning.svg";
import partlycloudydayhaze from "./WeatherIcons/partly-cloudy-day-haze.svg";
import overcastday from "./WeatherIcons/overcast-day.svg";
import rain from "./WeatherIcons/rain.svg";
import extremehail from "./WeatherIcons/extreme-hail.svg";
import windonshore from "./WeatherIcons/wind-onshore.svg";
import pollengrass from "./WeatherIcons/pollen-grass.svg";
import horizon from "./WeatherIcons/horizon.svg";

let iconlist = {
  thermometercolder,
  snowflake,
  moonwaningcrescent,
  thunderstormsdayovercastsnow,
  timeafternoon,
  thermometermercurycold,
  hail,
  haze,
  tornado,
  thunderstormsday,
  mist,
  overcastnightsnow,
  partlycloudynighthaze,
  thunderstormsovercast,
  thermometermercury,
  partlycloudynightsleet,
  uvindex1,
  thunderstormssnow,
  thermometercelsius,
  extremedaysmoke,
  windbeaufort3,
  uvindex9,
  hazeday,
  overcastfog,
  timelateevening,
  glove,
  overcasthaze,
  overcastdaysleet,
  partlycloudynightrain,
  flaggalewarning,
  thermometerwarmer,
  thermometerglasscelsius,
  sunrise,
  thermometersnow,
  extremesnow,
  uvindex10,
  uvindex2,
  overcastnighthail,
  extremedayhaze,
  windbeaufort9,
  extremenightfog,
  sunhot,
  overcastdrizzle,
  thermometerraindrop,
  extremedaysnow,
  partlycloudynightdrizzle,
  moonlastquarter,
  solareclipse,
  raindrop,
  extremehaze,
  raindropmeasure,
  hazenight,
  overcastdaydrizzle,
  moonfull,
  thunderstormsnight,
  partlycloudynightsnow,
  overcastnight,
  thunderstormsnightextremesnow,
  partlycloudydaysnow,
  umbrella,
  celsius,
  humidity,
  windbeaufort7,
  uvindex4,
  dustday,
  thunderstormsnightsnow,
  flagstormwarning,
  uvindex3,
  timelateafternoon,
  extremesmoke,
  thunderstormsextreme,
  alertfallingrocks,
  overcastrain,
  star,
  windbeaufort1,
  partlycloudydaysmoke,
  extremenightrain,
  clearday,
  windalert,
  flagsmallcraftadvisory,
  partlycloudynightfog,
  overcastnightsmoke,
  hurricane,
  thunderstormsextremesnow,
  thunderstormsnightovercastsnow,
  compass,
  overcastnighthaze,
  thermometer,
  extremerain,
  overcasthail,
  windbeaufort2,
  windbeaufort4,
  pressurehighalt,
  extremenightdrizzle,
  extremefog,
  snowman,
  overcastdaysnow,
  windbeaufort11,
  windsock,
  extremeday,
  extremenight,
  timenight,
  overcastnightdrizzle,
  overcastdayrain,
  partlycloudydayfog,
  windsockweak,
  fog,
  drizzle,
  windbeaufort12,
  clouddown,
  codered,
  flaghurricanewarning,
  raindrops,
  uvindex6,
  overcastsmoke,
  alertavalanchedanger,
  overcast,
  extremedaydrizzle,
  thunderstormsdaysnow,
  extremenightsmoke,
  extremesleet,
  partlycloudydayrain,
  windbeaufort8,
  partlycloudynight,
  codeorange,
  partlycloudydaydrizzle,
  starrynight,
  moonwaninggibbous,
  thermometerglass,
  thunderstormsnightextreme,
  thunderstormsnightovercast,
  extreme,
  extremenightsleet,
  thunderstormsdayextreme,
  overcastnightrain,
  overcastdayhaze,
  partlycloudynighthail,
  extremenightsnow,
  thunderstormsdayovercastrain,
  umbrellawind,
  overcastdayfog,
  dust,
  dustwind,
  moonnew,
  thermometerglassfahrenheit,
  wind,
  fallingstars,
  partlycloudydayhail,
  thunderstormsrain,
  thunderstormsextremerain,
  overcastsnow,
  clearnight,
  notavailable,
  windbeaufort10,
  extremedaysleet,
  moonrise,
  tidehigh,
  uvindex,
  codeyellow,
  rainbowclear,
  snow,
  smoke,
  windbeaufort0,
  pollenflower,
  extremenighthail,
  thunderstormsnightrain,
  overcastdayhail,
  moonfirstquarter,
  rainbow,
  extremenighthaze,
  windsnow,
  lightningbolt,
  thermometerfahrenheit,
  uvindex5,
  pollen,
  timelatemorning,
  extremedrizzle,
  timeevening,
  thunderstormsdayextremesnow,
  beanie,
  pressurelowalt,
  windbeaufort5,
  thermometerwater,
  pressurehigh,
  extremedayrain,
  extremedayfog,
  pressurelow,
  uvindex7,
  partlycloudyday,
  thunderstormsdayrain,
  overcastdaysmoke,
  thunderstorms,
  timelatenight,
  overcastsleet,
  thunderstormsovercastrain,
  thunderstormsdayextremerain,
  cloudup,
  codegreen,
  overcastnightfog,
  umbrellawindalt,
  fognight,
  fogday,
  moonset,
  smokeparticles,
  uvindex8,
  pollentree,
  overcastnightsleet,
  fahrenheit,
  thermometersun,
  thunderstormsnightovercastrain,
  dustnight,
  thunderstormsnightextremerain,
  extremedayhail,
  windoffshore,
  moonwaxinggibbous,
  partlycloudydaysleet,
  thunderstormsovercastsnow,
  sleet,
  barometer,
  uvindex11,
  tidelow,
  partlycloudynightsmoke,
  cloudy,
  sunset,
  thermometermoon,
  moonwaxingcrescent,
  windbeaufort6,
  thunderstormsdayovercast,
  timemorning,
  partlycloudydayhaze,
  overcastday,
  rain,
  extremehail,
  windonshore,
  pollengrass,
  horizon,
};

function temperature(details) {
  const locAndTemp = document.getElementById("locAndTemp");
  locAndTemp.innerText = "";
  const loc = document.createElement("h2");
  loc.style.marginLeft = "20px";
  loc.style.marginTop = "20px";
  loc.style.fontSize = "40px";
  loc.innerText = details.resolvedAddress;
  const chanceOfRain = document.createElement("p");
  chanceOfRain.style.marginLeft = "20px";
  chanceOfRain.style.fontSize = "25px";
  chanceOfRain.innerText = `Chance of Rain:${details.currentConditions.precipprob}%`;
  const temp = document.createElement("h1");
  temp.style.margin = "20px";
  temp.style.marginTop = "50px";
  temp.style.fontSize = "60px";
  temp.innerText = `${Math.round(((details.currentConditions.temp - 32) * 5) / 9)}°C`;
  locAndTemp.appendChild(loc);
  locAndTemp.appendChild(chanceOfRain);
  locAndTemp.appendChild(temp);

  const weatherIcon = document.getElementById("currIcon");
  weatherIcon.innerText = "";
  const img = document.createElement("img");
  let icon = details.currentConditions.icon;
  icon = icon.replaceAll("-", "");
  img.src = iconlist[icon];
  img.style.height = "250px";
  weatherIcon.appendChild(img);
}

function otherDetails(details) {
  const otherParam = document.getElementById("p13");
  otherParam.innerText = "";
  otherParam.style.display = "grid";
  otherParam.style.gridTemplateColumns = "1fr 1fr";
  otherParam.style.gridTemplateRows = "1fr 1fr 1fr";
  const uvIndex = document.createElement("div");
  uvIndex.innerText = `UV INDEX : ${details.currentConditions.uvindex}`;
  uvIndex.style.gridColumn = "1/2";
  uvIndex.style.gridRow = "1/2";
  otherParam.appendChild(uvIndex);
  const wind = document.createElement("div");
  wind.innerText = `WIND : ${Math.round(details.currentConditions.windspeed * 1.60934)} KM/H`;
  wind.style.gridColumn = "2/3";
  wind.style.gridRow = "1/2";
  otherParam.appendChild(wind);
  const humidity = document.createElement("div");
  humidity.innerText = `HUMIDITY : ${details.currentConditions.humidity}%`;
  humidity.style.gridColumn = "1/2";
  humidity.style.gridRow = "2/3";
  otherParam.appendChild(humidity);
  const feelsLike = document.createElement("div");
  feelsLike.innerText = `FEELS LIKE : ${Math.round(((details.currentConditions.feelslike - 32) * 5) / 9)}°C`;
  feelsLike.style.gridColumn = "2/3";
  feelsLike.style.gridRow = "2/3";
  otherParam.appendChild(feelsLike);
  const pressure = document.createElement("div");
  pressure.innerText = `PRESSURE : ${details.currentConditions.pressure} mb`;
  pressure.style.gridColumn = "1/2";
  pressure.style.gridRow = "3/4";
  otherParam.appendChild(pressure);
  const dew = document.createElement("div");
  dew.innerText = `DEW : ${Math.round(((details.currentConditions.dew - 32) * 5) / 9)}°C`;
  dew.style.gridColumn = "2/3";
  dew.style.gridRow = "3/4";
  otherParam.appendChild(dew);
}

function hourlyTemp(details) {
  const todaysForecast = document.getElementById("p21");
  todaysForecast.innerText = "";
  todaysForecast.style.backgroundColor = "#070F2B";
  todaysForecast.style.borderRadius = "15px";
  const title = document.createElement("h3");
  title.innerText = "TODAY'S FORECAST : ";
  title.style.height = "15%";
  title.style.color = "white";
  title.style.margin = "15px";
  const hourlyToday = document.createElement("div");
  hourlyToday.id = "hourlyToday";
  hourlyToday.style.display = "flex";
  hourlyToday.style.justifyContent = "space-evenly";
  hourlyToday.style.height = "75%";
  const am6 = document.createElement("div");
  am6.style.width = "15%";
  am6.innerHTML = `
    <h3>6 AM</h3>
    <img class="hourlyicon" src="${iconlist[details.days[0].hours[6].icon.replaceAll("-", "")]}" ></img>
    <h2>${Math.round(((details.days[0].hours[6].temp - 32) * 5) / 9)}°C</h2>
    `;
  const am9 = document.createElement("div");
  am9.style.width = "15%";
  am9.innerHTML = `
    <h3>9 AM</h3>
    <img class="hourlyicon" src="${iconlist[details.days[0].hours[9].icon.replaceAll("-", "")]}" ></img>
    <h2>${Math.round(((details.days[0].hours[9].temp - 32) * 5) / 9)}°C</h2>

    `;
  const pm12 = document.createElement("div");
  pm12.style.width = "15%";
  pm12.innerHTML = `
    <h3>12 PM</h3>
        <img class="hourlyicon" src="${iconlist[details.days[0].hours[12].icon.replaceAll("-", "")]}" ></img>
    <h2>${Math.round(((details.days[0].hours[12].temp - 32) * 5) / 9)}°C</h2>
    `;
  const pm3 = document.createElement("div");
  pm3.style.width = "15%";
  pm3.innerHTML = `
    <h3>3 PM</h3>
        <img class="hourlyicon" src="${iconlist[details.days[0].hours[15].icon.replaceAll("-", "")]}" ></img>

    <h2>${Math.round(((details.days[0].hours[15].temp - 32) * 5) / 9)}°C</h2>
    `;
  const pm6 = document.createElement("div");
  pm6.style.width = "15%";
  pm6.innerHTML = `
    <h3>6 PM</h3>
        <img class="hourlyicon" src="${iconlist[details.days[0].hours[18].icon.replaceAll("-", "")]}" ></img>
    <h2>${Math.round(((details.days[0].hours[18].temp - 32) * 5) / 9)}°C</h2>
    `;
  const pm9 = document.createElement("div");
  pm9.style.width = "15%";
  pm9.innerHTML = `
    <h3>9 PM</h3>
        <img class="hourlyicon" src="${iconlist[details.days[0].hours[21].icon.replaceAll("-", "")]}" ></img>
    <h2>${Math.round(((details.days[0].hours[21].temp - 32) * 5) / 9)}°C</h2>
    `;
  hourlyToday.appendChild(am6);
  hourlyToday.appendChild(am9);
  hourlyToday.appendChild(pm12);
  hourlyToday.appendChild(pm3);
  hourlyToday.appendChild(pm6);
  hourlyToday.appendChild(pm9);
  todaysForecast.appendChild(title);
  todaysForecast.appendChild(hourlyToday);
}

function showCurrentDetails(details) {
  temperature(details);
  otherDetails(details);
  hourlyTemp(details);
}

function showWeekDetails(location) {
  const sevenDaysforecast = document.getElementById("p22");
  sevenDaysforecast.style.backgroundColor = "#070F2B";
  sevenDaysforecast.style.margin = "20px";
  sevenDaysforecast.style.borderRadius = "15px";
  sevenDaysforecast.innerText = "";
  const title = document.createElement("h3");
  title.innerText = "NEXT 7-DAY FORECAST : ";
  title.style.fontSize = "larger";
  title.style.padding = "10px";
  title.style.height = "5%";
  title.style.margin = "10px";
  const sevenDays = document.createElement("div");
  sevenDays.style.height = "90%";
  const todayDate = new Date();
  async function fetchSevenDaysWeather() {
    const promises = [];
    const dayData = [];

    for (let i = 0; i < 7; i++) {
      let link = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${format(addDays(todayDate, i + 1), "yyyy-MM-dd")}?key=WP4TKUECMWN3SVYMB6EM496HL`;

      promises.push(
        fetch(link, { mode: "cors" }).then((response) => response.json()),
      );
    }

    const results = await Promise.all(promises);

    results.forEach((details, index) => {
      const date = document.createElement("div");
      date.style.display = "flex";
      date.style.justifyContent = "space-evenly";
      date.style.height = "12%";
      date.style.alignItems = "center";
      date.style.border = "1px solid #9290C3";
      date.style.borderRadius = "20px";
      date.style.margin = "10px";

      const day = document.createElement("h4");
      day.innerText = `${format(addDays(todayDate, index + 1), "EEEE")}`;

      const icon = document.createElement("img");
      let iconname = details.days[0].icon;
      iconname = iconname.replaceAll("-", "");
      icon.src = iconlist[iconname];
      icon.style.height = "90px";

      const temp = document.createElement("h4");
      temp.innerText = `${Math.round((details.days[0].temp - 32) * (5 / 9))}°C`;
      console.log((details.days[0].temp - 32) * (5 / 9));

      date.appendChild(day);
      date.appendChild(icon);
      date.appendChild(temp);

      dayData.push(date);
    });
    dayData.forEach((date) => sevenDays.appendChild(date));
  }

  fetchSevenDaysWeather();

  sevenDaysforecast.appendChild(title);
  sevenDaysforecast.appendChild(sevenDays);
}

function showWeather(location) {
  let date = format(new Date(), "yyyy-MM-dd");
  let link1 = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date}?key=WP4TKUECMWN3SVYMB6EM496HL`;

  async function weatherDetails() {
    try {
      const response = await fetch(link1, { mode: "cors" });
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const details = await response.json();
      showCurrentDetails(details); // Call your function to display the weather details
      showWeekDetails(location); // Assuming this function also needs a similar error handling
    } catch (error) {
      console.error("Failed to fetch weather details:", error);
      alert(
        "Unable to fetch weather details. Please check the location and try again.",
      );
    }
  }
  weatherDetails();
}

const search = document.getElementById("search");
search.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  if (data.get("location") !== "") showWeather(data.get("location"));
});
