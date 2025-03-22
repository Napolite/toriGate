import React from "react";
import HouseFooter from "./assets/images/house 1 1.png";

function Footer() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div>
        <div className="text-[#1e1e1e]">
          <div>© 2024 Torii Gate.  All Rights Reserved.</div>
          <nav>
            <div>Home</div>
            <div>Buy</div>
            <div>List Property</div>
            <div>Company</div>
          </nav>
          <div></div>
        </div>
      </div>
      <div>
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
