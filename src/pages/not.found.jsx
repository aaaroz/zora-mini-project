import React from "react";
import bot from "../assets/error-bot.png";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center text-center pt-0 mt-0 h-screen w-screen font-bold text-2xl text-neutral-800">
      <h1 className="font-bold font-serif ">WHOOOPSSS...!!</h1>
      <h2 className="p-5 text-xs md:text-lg capitalize text-red-700">
        Error 404 - page not found!
      </h2>
      <img
        src={bot}
        alt="not-found"
        className="w-[140px] h-[100px] md:w-[250px] md:h-[200px]"
      />
      <h2 className="p-5 text-lg md:text-xl capitalize">
        I think, u turn the wrong way!
      </h2>
      <span className="capitalize items-center flex">
        go back to
        <a
          href="/"
          className="bg-neutral-800 text-white text-lg px-5 py-1 ms-3 rounded-full capitalize bg-opacity-100 hover:bg-opacity-50"
        >
          Zora E-commerce
        </a>
      </span>
    </div>
  );
}
