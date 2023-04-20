import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Academy</h1>
      <ul className="hidden md:flex ">
        <li className="p-2 mr-2 bg-[#00df9a] rounded cursor-pointer">Home</li>
        <li className="p-2 mr-2 hover:bg-[#00df9a] rounded cursor-pointer">
          company
        </li>
        <li className="p-2 mr-2 hover:bg-[#00df9a] rounded cursor-pointer">
          Resources
        </li>
        <li className="p-2 mr-2 hover:bg-[#00df9a] rounded cursor-pointer">
          About
        </li>
        <li className="p-2 mr-2 hover:bg-[#00df9a] rounded cursor-pointer">
          Contact
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose />}
      </div>
      <div>
        <ul
          className={
            nav
              ? "fixed uppercase left-0 top-0 bg-white text-black pt-16 h-full w-[60%] ease-in-out duration-700"
              : "fixed left-[-100%]"
          }
        >
          <li className="p-4 border-b border-gray-500 bg-[#aeb0fd]">Home</li>
          <li className="p-4 border-b border-gray-500 hover:bg-[#aeb0fd]">
            company
          </li>
          <li className="p-4 border-b border-gray-500 hover:bg-[#aeb0fd]">
            Resources
          </li>
          <li className="p-4 border-b border-gray-500 hover:bg-[#aeb0fd]">
            About
          </li>
          <li className="p-4 border-b border-gray-500 hover:bg-[#aeb0fd]">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}
