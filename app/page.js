"use client";
import React, { useState } from "react";
import Input from "./components/Input";
import CurrentTemp from "./components/currentTemp";
import WeatherDetails from "./components/WeatherDetails";
import WeekForecast from "./components/WeatherForecast";

const Home = () => {
  // const apiKey = process.env.API_KEY;

  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `http://api.weatherapi.com/v1/forecast.json?key=fb3e47fc325d4980bee52057231808&q=${location}&days=7&aqi=no&alerts=yes
   `;

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        } else {
          console.log("success");
        }

        const data = await response.json();
        console.log(data);
        setData(data);
        setLocation("");
        setError("");
      } catch (error) {
        console.log(error);
        setError("Please enter the correct city name");
        setData({});
      }
    }
  };

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <h2 className="text-5xl font-semibold mb-4">
          Welcome to the Weather Forecast
        </h2>
        <p className="text-2xl text-black">
          Enter any city name to get the weather report.
        </p>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <p className="text-6xl font-semibold mb-4">City Not Found</p>
        <p className="text-1xl text-black">
          Please check the city and try again.
        </p>
      </div>
    );
  } else {
    content = (
      <>
        <div className="flex md:flex-row flex-col p-14 items-center justify-between">
          <CurrentTemp data={data} />
          <WeekForecast data={data} />
        </div>
        <div>
          <WeatherDetails data={data} />
        </div>
      </>
    );
  }

  return (
    <div className="bg-cover bg-gradient-to-r from-blue-300 to-blue-600z h-fit">
      <div className=" w-full rounded-lg-flex flex-col h-fit">
        {/* Input and Logo */}
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <h1 className="text-3xl mb-8 md:mb-0 order-1 text-black/30 py-2 px-4 rounded-xl font-bold ">
            Weather App
          </h1>
        </div>
        {content}
      </div>
    </div>
  );
};

export default Home;
