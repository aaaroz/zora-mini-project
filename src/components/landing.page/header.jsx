import React from "react";

export default function Header() {
  return (
    <header>
      <div className="bg-center bg-hero-bg h-[41rem] md:[55rem] ">
        <div className="px-5 relative top-[445px]">
          <h3 className="text-white text-xs ms-5 font-semibold md:text-lg uppercase">
            ZORA - ECOMMERCE
          </h3>
          <h2 className="text-white text-2xl ms-5 font-semibold md:text-4xl uppercase">
            with streetwear outfits, make your days greats!
          </h2>
        </div>
      </div>
    </header>
  );
}
