import React from "react";
import laptop from "../Assets/laptop.jpg";

export default function Analytics() {
  return (
    <div className="bg-white px-4 py-2 w-full text-black">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px]" src={laptop} alt="laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-lg text-[#00df9a] font-bold uppercase">
            Go get your course
          </p>
          <h1 className="text-3xl font-bold py-2">Manage your course easy</h1>
          <p className="py-2 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            soluta dolores neque quod! Obcaecati doloribus ut perspiciatis
            corrupti ullam, tempora vero, modi ipsam rerum consequuntur, qui
            magnam illo quasi voluptas.
          </p>
          <button className="bg-black text-white p-2 mt-3 w-[200px] rounded mx-auto md:mx-0 hover:bg-[#00df9a] hover:text-black">
            Ge Started
          </button>
        </div>
      </div>
    </div>
  );
}
