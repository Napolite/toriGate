import React from "react";
import HouseFooter from "./assets/images/house 1 1.png";
import { ImInstagram } from "react-icons/im";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaApple,
} from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

function Footer() {
  return (
    <div
      className="h-screen flex flex-col justify-between
     text-[#1e1e1e] mt-[100px] relative"
    >
      <div className="absolute bottom-0 w-full">
        <div className="mt-[400px] text-[#1e1e1e] text-center flex justify-center font-[800] text-[36px]">
          <p className="text-[44px] w-[723px] font-[800] scale-transparency">
            Begin your journey to House search with Torii gate now
          </p>
        </div>
        <div className="flex justify-center mt-[20px] mb-[50px] scale-transparency">
          <button className="w-[183px] h-[60px] py-[13px] px-[20px] bg-[#1e1e1e] text-white rounded-[8px] mb-[20px]">
            Download <FaApple className="inline text-[#ffffff]" />
            <IoLogoGooglePlaystore className="inline text-[#ffffff]" />
          </button>
        </div>
        <div className="top-0">
          <div className="text-[#1e1e1e] flex justify-between items-center px-10 py-5  w-[86.1%] mx-auto font-[800]">
            <div className="text-[18px]">
              © 2024 Torii Gate.  All Rights Reserved.
            </div>
            <nav className="flex items-center w-[460px] justify-between text-[16px]">
              <div>Home</div>
              <div>Buy</div>
              <div>List Property</div>
              <div>Company</div>
            </nav>
            <div>
              <nav className="flex items-center w-[180px] justify-between">
                <FaLinkedinIn className="text-[#1e1e1e] text-2xl mx-2" />
                <FaFacebookF className="text-[#1e1e1e] text-2xl mx-2" />
                <FaYoutube className="text-[#1e1e1e] text-2xl mx-2" />
                <FaInstagram className="text-[#1e1e1e] text-2xl mx-2" />
              </nav>
            </div>
          </div>
        </div>
        <div className="text-transparent footer-text mb-[-250px] animate-scale">
          TORII GATE
        </div>
        <div className="mt-[-85px]">
          <img src={HouseFooter} className="w-full " />
        </div>
      </div>
    </div>
  );
}

export default Footer;
