import React from "react";
import hyderabad from "../assets/hyderabad.png";
import location from "../assets/locations.png";
import sea from "../assets/sea.png";
import bangalore from "../assets/bangalore.png";
import chennai from "../assets/chennai.png";
import karimnagar from "../assets/Karimnagar.png";
import mumbai from "../assets/mumbai.png";
import underline from "../assets/underline.png";

function Locations() {
  return (
    <div
      style={{ textAlign: "center" }}
      className="flex items-center  flex-col"
    >
      <div className="text-4xl text-mcolor" style={{ display: "inline-block" }}>
        Our offices are located at
      </div>
      <br />
      <div>
        {" "}
        <img src={underline} />
      </div>
      <br />

      <div className="flex gap-5 w-full flex-wrap items-center justify-center ">
        <div className="bg-white h-80 w-96 flex border shadow-md  flex-col items-center rounded-xl ">
          <div className="bg-creem h-40 w-full rounded-xl flex flex-col justify-center items-center">
            <img
              src={hyderabad}
              height={"70px"}
              width={"70px"}
              alt="hy"
              style={{ height: "70px" }}
            />{" "}
            <br />
            <span className="text-2xl font-normal">Hyderabad</span>
          </div>
          <br />
          <div className="font-normal text-sm w-11/12">
            EXcellenC - 3rd Floor, Gnana Towers, Road no 13, Near DMart, Kavuri
            Hills, Madhapur, Hyderabad, Telangana 500081.
          </div>{" "}
          <br />
          <div className="flex text-red-600 underline">
            <img src={location} /> dklfjsfjklsfjl
          </div>
        </div>
        <div className="bg-white h-80 w-96 flex border shadow-md  flex-col items-center rounded-xl ">
          <div className="bg-cblue h-40 w-full rounded-xl flex flex-col justify-center items-center">
            <img
              src={sea}
              height={"70px"}
              width={"70px"}
              alt="hy"
              style={{ height: "70px" }}
            />{" "}
            <br />
            <span className="text-2xl font-normal">Visakhapatnam</span>
          </div>
          <br />
          <div className="font-normal text-sm w-11/12">
            EXcellenC - 3rd Floor, Gnana Towers, Road no 13, Near DMart, Kavuri
            Hills, Madhapur, Hyderabad, Telangana 500081.
          </div>{" "}
          <br />
          <div className="flex text-red-600 underline">
            <img src={location} /> dklfjsfjklsfjl
          </div>
        </div>
        <div className="bg-white h-80 w-96 flex border shadow-md  flex-col items-center rounded-xl ">
          <div className="bg-ccblue h-40 w-full rounded-xl flex flex-col justify-center items-center">
            <img
              src={karimnagar}
              height={"70px"}
              width={"70px"}
              alt="hy"
              style={{ height: "70px" }}
            />{" "}
            <br />
            <span className="text-2xl font-normal">Karimnagar</span>
          </div>
          <br />
          <div className="font-normal text-sm w-11/12">
            EXcellenC - 3rd Floor, Gnana Towers, Road no 13, Near DMart, Kavuri
            Hills, Madhapur, Hyderabad, Telangana 500081.
          </div>{" "}
          <br />
          <div className="flex text-red-600 underline">
            <img src={location} /> dklfjsfjklsfjl
          </div>
        </div>
        <div className="bg-white h-80 w-96 flex border shadow-md  flex-col items-center rounded-xl ">
          <div className="bg-cpink h-40 w-full rounded-xl flex flex-col justify-center items-center">
            <img
              src={bangalore}
              height={"70px"}
              width={"70px"}
              alt="hy"
              style={{ height: "70px" }}
            />{" "}
            <br />
            <span className="text-2xl font-normal">Bangalore</span>
          </div>
          <br />
          <div className="font-normal text-sm w-11/12">
            EXcellenC - 3rd Floor, Gnana Towers, Road no 13, Near DMart, Kavuri
            Hills, Madhapur, Hyderabad, Telangana 500081.
          </div>{" "}
          <br />
          <div className="flex text-red-600 underline">
            <img src={location} /> dklfjsfjklsfjl
          </div>
        </div>
        <div className="bg-white h-80 w-96 flex border shadow-md  flex-col items-center rounded-xl ">
          <div className="bg-nblue h-40 w-full rounded-xl flex flex-col justify-center items-center">
            <img
              src={mumbai}
              height={"70px"}
              width={"70px"}
              alt="hy"
              style={{ height: "70px" }}
            />{" "}
            <br />
            <span className="text-2xl font-normal">Pune</span>
          </div>
          <br />
          <div className="font-normal text-sm w-11/12">
            EXcellenC - 3rd Floor, Gnana Towers, Road no 13, Near DMart, Kavuri
            Hills, Madhapur, Hyderabad, Telangana 500081.
          </div>{" "}
          <br />
          <div className="flex text-red-600 underline">
            <img src={location} /> dklfjsfjklsfjl
          </div>
        </div>
        <div className="bg-white h-80 w-96 flex border shadow-md  flex-col items-center rounded-xl ">
          <div className="bg-pblue h-40 w-full rounded-xl flex flex-col justify-center items-center">
            <img
              src={chennai}
              height={"70px"}
              width={"70px"}
              alt="hy"
              style={{ height: "70px" }}
            />{" "}
            <br />
            <span className="text-2xl font-normal">Chennai</span>
          </div>
          <br />
          <div className="font-normal text-sm w-11/12">
            EXcellenC - 3rd Floor, Gnana Towers, Road no 13, Near DMart, Kavuri
            Hills, Madhapur, Hyderabad, Telangana 500081.
          </div>{" "}
          <br />
          <div className="flex text-red-600 underline">
            <img src={location} /> dklfjsfjklsfjl
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locations;
