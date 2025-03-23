// import { useState } from 'react'

import "./App.css";
import Discover from "./discover/discover";

import Footer from "./footer";
import Landing from "./landing/landing";
import Properties from "./properties/properties";

function ToriGate() {
  return (
    <div className="w-[100%]">
      <Landing />
      <Properties />
      <Discover />
      {/* -<Faqs /> */}
      <Footer />
    </div>
  );
}

export default ToriGate;
