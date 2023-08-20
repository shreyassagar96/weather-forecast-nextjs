const WeatherDetails = ({ data }) => {
  const windSpeed = data.current ? data.current.wind_mph : null;
  const humidity = data.current ? data.current.humidity : null;
  const cloud = data.current ? data.current.cloud : null;
  const lastUpdate = data.current ? data.current.last_updated : null;
  const sunrise = data.current
    ? data.forecast.forecastday[0].astro.sunrise
    : null;
  const sunset = data.current
    ? data.forecast.forecastday[0].astro.sunset
    : null;
  const uvRays = data.current ? data.current.uv : null;
  const feelLike = data.current ? data.current.feelslike_c : null;

  return (
    <>
      <div className="p-12">
        <h1 className="mb-4 text-3xl text-center">Weather Details</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div>
              <h3 className="text-2xl py-2 text font-bold">Last Updated</h3>
              <h3 className="text-blue-600 text-center font-medium">
                {lastUpdate}
              </h3>
            </div>
          </div>
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl ">
              <h3 className="text-2xl py-2 text font-bold">Wind Speed</h3>
              <h3 className="text-blue-600 text-center font-medium">
                {windSpeed}mph
              </h3>
            </div>
          </div>
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl ">
              <h3 className="text-2xl py-2 text font-bold">Humidity</h3>
              <h3 className="text-blue-600 text-center font-medium">
                {humidity}%
              </h3>
            </div>
          </div>
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl ">
              <h3 className="text-2xl py-2 text font-bold">Cloud</h3>
              <h3 className="text-blue-600 text-center font-medium">
                {cloud}%
              </h3>
            </div>
          </div>
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl ">
              <h3 className="text-2xl py-2 text font-bold">Sunrise</h3>
              <h3 className="text-blue-600 text-center font-medium">
                {sunrise}
              </h3>
            </div>
          </div>
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl ">
              <h3 className="text-2xl py-2 text font-bold">Sunset</h3>
              <h3 className="text-blue-600 text-center font-medium">
                {sunset}
              </h3>
            </div>
          </div>
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl ">
              <h3 className="text-2xl py-2 text font-bold">UV Rays</h3>
              <h3 className="text-blue-600 text-center font-medium">
                {uvRays}%
              </h3>
            </div>
          </div>
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl ">
              <h3 className="text-2xl py-2 text font-bold">Feels Like</h3>
              <h3 className="text-blue-600 text-center font-medium">
                {feelLike}°c
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;
