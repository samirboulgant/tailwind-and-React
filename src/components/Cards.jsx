import React from "react";
import single from "../Assets/single.png";
import double from "../Assets/double.png";
import triple from "../Assets/triple.png";

export default function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 text-black bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col items-center py-4 rounded-lg hover:scale-105 cursor-pointer">
          <img className="w-20  mt-[-3rem] bg-white" src={single} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center font-bold text-3xl">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b-2 mx-8 mt-5">500GB Storage</p>
            <p className="py-2 border-b-2 mx-8 ">1 granted user</p>
            <p className="py-2 border-b-2 mx-8 ">send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] font-bold text-black p-2 mt-3 w-[200px] rounded mx-auto hover:bg-[#00df9a] hover:text-white">
            Get Trail
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col md:my-[-30px] my-16 items-center py-4 rounded-lg hover:scale-105 cursor-pointer">
          <img className="w-20  mt-[-3rem] bg-white" src={single} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center font-bold text-3xl">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b-2 mx-8 mt-5">500GB Storage</p>
            <p className="py-2 border-b-2 mx-8 ">1 granted user</p>
            <p className="py-2 border-b-2 mx-8 ">send up to 2GB</p>
          </div>
          <button className="bg-black font-bold text-white p-2 mt-3 w-[200px] rounded mx-auto hover:bg-[#00df9a] hover:text-white">
            Get Trail
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col items-center py-4 rounded-lg hover:scale-105 cursor-pointer">
          <img className="w-20  mt-[-3rem] bg-white" src={single} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center font-bold text-3xl">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b-2 mx-8 mt-5">500GB Storage</p>
            <p className="py-2 border-b-2 mx-8 ">1 granted user</p>
            <p className="py-2 border-b-2 mx-8 ">send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] font-bold text-black p-2 mt-3 w-[200px] rounded mx-auto hover:bg-[#00df9a] hover:text-white">
            Get Trail
          </button>
        </div>
      </div>
    </div>
  );
}
