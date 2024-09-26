import React, { useEffect, useState } from "react";
import Timedata from "./Timedata";
import { fiveDay_data } from "@/utils/fetch";

function Current_show({ data }) {
  const [fiveDay, setFiveday] = useState([]);
  const [selectedDay, setSelectedDay] = useState(0);

  const query = data?.name;

  const search = async (query) => {
    const data = await fiveDay_data(query);
    setFiveday(data.list);
  };

  useEffect(() => {
    if (query) {
      search(query);
    }
  }, [query]);

  if (!data || !data.weather) {
    return <div>No data available</div>;
  }

  const weather = data.weather[0];


  const filteredData = fiveDay
    .filter((entry) => {
      const entryDate = new Date(entry.dt_txt);
      const currentDate = new Date();
      return entryDate.getDate() === currentDate.getDate() + selectedDay;
    })
    .slice(0, 8);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-center">
        <section className="flex justify-center rounded-md items-center w-10/12 bg-slate-400">
          <main className="w-9/12 flex items-center justify-start">
          <div>
            <img
              className="size-64"
              src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt="weather icon"
            />
            </div>
            <div className="flex flex-col justify-between items-start w-full">
            <h1 className="font-extrabold text-3xl">{data.name}</h1>
            <p className="text-xl"><span className="font capitalize">max temp:</span> {(data.main.temp_max - 273.15).toFixed(1)}°C</p>
            <p className="flex items-center w-full  text-2xl"><span className="font-bold capitalize"></span> <span className="text-5xl p-4 rounded-md font-extrabold bg-slate-500">{(data.main.temp - 273.15).toFixed(1)}°C</span></p>
            <p className="text-xl"><span className="font capitalize">min temp:</span> {(data.main.temp_min - 273.15).toFixed(1)}°C</p>
            <p className="text-2xl"><span className=" capitalize">humidity:</span> {data.main.humidity}%</p>
            </div>
          </main>
          <aside className="w-3/12 h-full rounded">
            {[...Array(6).keys()].map((day) => (
              <div
                key={day}
                className="text-center py-4 font-bold border bg-slate-500 mr-1 border-white my-1 rounded hover:bg-slate-600 hover:scale-110 transition cursor-pointer"
                onClick={() => setSelectedDay(day)}
              >
                {day === 0 ? "Today" : `${day} days`}
              </div>
            ))}
          </aside>
        </section>
      </div>
      <section className="w-full">
        <Timedata time={filteredData} />
      </section>
    </div>
  );
}

export default Current_show;
