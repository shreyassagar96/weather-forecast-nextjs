import React from "react";

const WeekForecast = ({ data }) => {
  // const getDays = data.current ? data.forecast.forecastday : null;
  if (!data) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 w-full h-fit py-4">
      {data.forecast.forecastday.map((day, index) => (
        <div
          key={index}
          className="bg-white/40 p-2 text-center rounded-lg flex flex-col items-center"
        >
          <p className="font-bold text-2xl">
            {new Date(day.date).toLocaleString("en-US", {
              weekday: "short",
            })}
          </p>
          <img
            className="w-[70px] object-cover"
            src={day.day.condition.icon}
            alt="img"
          />
          <div>
            <p>
              Max {day.day.maxtemp_c}
              <span>°</span>
            </p>
            <p>
              Min {day.day.mintemp_c}
              <span>°</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeekForecast;
