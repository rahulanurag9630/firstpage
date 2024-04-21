import React from "react";
import img from "../assets/banner.png";
import Contact from "../components/Contact";
import ToggeledForm from "../components/ToggeledForm";

function F1() {
  return (
    <div
      className="flex items-center  justify-center w-full h-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="w-8/12 h-3/4 bg-white rounded-lg flex justify-evenly items-center flex-row">
        <div
          className="hidden md:flex align-middle justify-center"
          style={{ width: "45%" }}
        >
          <Contact />
        </div>
        <div className="" style={{ width: "55%" }}>
          <ToggeledForm />
        </div>
      </div>
    </div>
  );
}

export default F1;
