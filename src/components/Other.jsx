import { useEffect, useState } from "react";
import "../styles/other.css";

function Other() {
  let [weathers, setWeather] = useState("");

  useEffect(() => {
    const getweather = async () => {
      let resp = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=4db8aabb08f521e11bdb7a3297de97e2&units=metric&lang=ru"
      );
      let data = await resp.json();
      console.log(data);
      setWeather(data);
    };
    getweather().catch(console.error);
  }, []);

  return (
    <>
      <div className="widget">
        <p className="widget_title">
          Weather in <br />
          {weathers.name}е
        </p>
        <hr />
        <img
          src={
            weathers &&
            `http://openweathermap.org/img/wn/${weathers.weather[0].icon}@2x.png`
          }
        />

        <p className="cloud">{weathers && weathers.weather[0].description} </p>
        <p className="temp">
          just now - {weathers && weathers.main.temp} &ordm;C
        </p>
        <p className="temp_max">
          max - {weathers && weathers.main.temp_max} &ordm;C
        </p>
        <p className="wind">{weathers && weathers.wind.speed} м/с</p>
        <p className="hum">{weathers && weathers.main.humidity}%</p>
      </div>
    </>
  );
}

export default Other;
