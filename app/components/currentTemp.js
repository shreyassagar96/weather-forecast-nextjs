import { getCurrentDate } from "../utils/currentDate";

const CurrentTemp = ({ data }) => {
  const currentDate = getCurrentDate();
  const weatherIcon = data.current ? data.current.condition.icon : null;
  const getTemp = data.current ? data.current.temp_c : null;
  const currentCondition = data.current ? data.current.condition.text : null;
  const getName = data.current ? data.location.name : null;
  const getRegion = data.current ? data.location.region : null;
  const getCountry = data.current ? data.location.country : null;

  return (
    <div className="flex flex-col mb-0 md:mb-0 items-start gap-2 w-1/2">
      <div className="flex items-center">
        <div>
          <h1 className="text-4xl text-white">Today</h1>
          <p className="text-white">{currentDate}</p>
        </div>
        {weatherIcon && (
          <div>
            <img
              className="w-[70px] object-cover"
              src={weatherIcon}
              alt="cloud img"
            />
          </div>
        )}
      </div>
      <div>
        <p className="text-5xl text-white">
          {getTemp}
          <span className="text-5xl">°c</span>
        </p>
        <span className="text-white">{currentCondition}</span>
      </div>
      <div>
        <div className="flex items-center text-black bg-white px-2 py-2 rounded-xl ">
          {/* <MdLocationOn fontSize={40} /> */}
          <span className="md:w-fit">
            {getName}, {getRegion}, {getCountry}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CurrentTemp;
