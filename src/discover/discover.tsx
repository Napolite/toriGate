import React from "react";
import "./discover.css";
function Discover() {
  return (
    <div
      className="w-full h-screen flex justify-center items-center content-center discover mt-[100px] relative"
      //   style={{ backgroundImage: "url('../assets/images/Big1.png')" }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 h-full w-full bg-[rgba(0,0,0,0.5)]">
        hello
      </div>
      <div className="flex justify-center flex-col items-center content-center z-[999]">
        <p className="text-[60px] font-[800] text-white w-[1090px] text-center">
          Discover real estate investment opportunities that suit you.
        </p>
        <button className="w-[123px] h-[48px] bg-[#ffffff] rounded-[8px] mb-[20px] text-[#1e1e1e] mt-[40px]">
          Discover
        </button>
      </div>
    </div>
  );
}

export default Discover;
