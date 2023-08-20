"use client";
import React from "react";

const Input = ({ handleSearch, setLocation }) => {
  // if(setLocation.length === 0){
  //   toast.error("Please enter ")
  // }
  return (
    <form className="flex items-center md:w-2/4 w-full order-2 md:order-1">
      <input
        className="w-full bg-transparent border-b-2 outline-none placeholder-white text-white"
        onKeyDown={handleSearch}
        onChange={(e) => setLocation(e.target.value)}
        type="text"
        placeholder="Enter City Name"
      />
      <div className="cursor-pointer ml-[-25px] text-white"></div>
    </form>
  );
};

export default Input;
