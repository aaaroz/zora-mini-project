import React from "react";

const ButtonShop = ({ teks }) => {
  return (
    <button className="uppercase mt-24 px-14 md:px-16 py-3 font-semibold  border-2 border-neutral-900">
      {teks}
    </button>
  );
};

export default ButtonShop;
