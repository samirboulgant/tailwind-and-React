import React from "react";

export default function NewsLetters() {
  return (
    <div className="flex md:flex-row md:justify-around flex-col md:items-center items-start w-full p-4 h-[250px]">
      <div className="py-4">
        <h1 className="font-bold md:text-3xl text-xl">
          Want tips and tricks to optimize your flow
        </h1>
        <p className="text-lg">
          sign up to our newsletter and stay up to date{" "}
        </p>
      </div>
      <div className="mt-4">
        <div className="flex">
          <input
            type="text"
            placeholder="Enter your email"
            className="pl-2 pr-16 rounded mr-2 "
          />
          <button className="bg-[#00df9a] rounded p-2 text-black hover:bg-white">
            Notify me
          </button>
        </div>
        <p className="text-lg">
          we care about the privacy of your data
          <span className="block text-[#00df9a]">privacy policy</span>
        </p>
      </div>
    </div>
  );
}
