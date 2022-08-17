import { useState, useEffect } from "react";

function Weather() {
  const [longitude, setLongitude] = useState("-109.538017");
  const [latitude, setLatitude] = useState("40.455601");
  const [forecast, setForecast] = useState([]);

  const renderDate = (hours) => {
    const date = new Date();
    const time = date.setTime(date.getTime() + Number(hours) * 60 * 60 * 1000);
    const newDate = new Date(time);

    return newDate.toLocaleTimeString([], {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
    });
  };

  const renderForecast = () => {
    return forecast?.map((timepoint) => (
      <div className="timepoint" key={timepoint.timepoint}>
        <div className="day-header">
          {renderDate(Number(timepoint.timepoint))}
        </div>

        {Object?.keys(timepoint)?.map((key) => (
          <div className="forecast-property" key={key}>
            {key !== "timepoint" ? `${key}: ${timepoint[key]}` : null}
          </div>
        ))}
      </div>
    ));
  };

  useEffect(() => {
    fetch(
      `https://www.7timer.info/bin/civil.php?lon=${longitude}&lat=${latitude}&ac=0&unit=british&output=json&tzshift=0`
    )
      .then((res) => res.json())
      .then((data) => setForecast(data.dataseries))
      .catch((err) => console.error("Weather Fetch Error: ", err));
  }, []);

  return (
    <div className="weather">
      <div className="weather-wrapper">
        {forecast[0] ? renderForecast() : <h2>...Loading</h2>}
      </div>
    </div>
  );
}

export default Weather;
