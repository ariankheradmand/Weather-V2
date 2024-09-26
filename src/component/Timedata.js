import React from "react";

function Timedata({ time }) {
  if (!time || !time[0]) {
    return <div>No data available</div>;
  }
  const weather = time[0];
  const IconData = weather.weather[0].icon;
  return (
    <div className="w-full flex items-center justify-center transition ">
      <div className="w-10/12 flex items-center bg-slate-800 mt-4 rounded-md overflow-auto">
        {time.length > 0 ? (
          time.map((entry, index) => (
            <div
              key={index}
              className="w-full flex h-auto bg-gray-300 p-4 m-2 rounded"
            >
              <div className="w-full flex flex-col items-center justify-center text-center">
                <img
                  className="size-12"
                  src={`https://openweathermap.org/img/wn/${IconData}@2x.png`}
                  alt="weather icon"
                />
                <span>{new Date(entry.dt_txt).toLocaleTimeString()}</span>
              </div>
              <div className="w-full flex flex-col items-center justify-center text-center">
                <div className="">{(entry.main.temp - 273.15).toFixed(1)}°C</div>
                <div className="font-bold">{entry.weather[0].description}</div>
              </div>
            </div>
          ))
        ) : (
          <p>No data available for this day.</p>
        )}
      </div>
    </div>
  );
}

export default Timedata;
