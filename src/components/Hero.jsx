import React from "react";
import Typed from "react-typed";

export default function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold text-2xl p-2">
          Grow with your skills
        </p>
        <h1 className="font-bold text-5xl p-2">Improve your skills</h1>
        <div className="flex items-center justify-center">
          <p className="font-bold text-xl mr-3">
            fast,flexible, comfortable for
          </p>
          <Typed
            className="font-bold text-xl"
            strings={["Beginer", "Intermediate", "Advanced"]}
            typeSpeed={120}
            backSpeed={150}
            loop
          />
        </div>
        <p className="text-gray-500 md:text-xl text-sm font-bold m-2">
          The best play to learn and improve your skill in a faster way let get
          started
        </p>
        <button className="bg-white text-black p-2 mt-3 w-[200px] rounded mx-auto hover:bg-[#00df9a] hover:text-white">
          Get Started
        </button>
      </div>
    </div>
  );
}
