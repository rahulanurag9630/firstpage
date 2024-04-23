import React from "react";
import img from "../assets/banner.png";
import Contact from "../components/Contact";
import ToggeledForm from "../components/ToggeledForm";

function F1() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full  h-auto bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="w-8/12 p-5 h-auto bg-white rounded-lg mt-11 mb-11 flex flex-col lg:flex-row justify-evenly items-center">
        <div className="lg:w-7/12 lg:order-2 w-full">
          <ToggeledForm />
        </div>
        <div className="lg:w-6/12 lg:order-1 w-full">
          <Contact />
        </div>
      </div>

      {/* Manual CSS for responsive layout */}
      <style>{`
        @media (max-width: 1024px) {
          .flex.lg\:flex-row {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}

export default F1;
