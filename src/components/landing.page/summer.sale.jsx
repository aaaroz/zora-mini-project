import React from "react";
import summerSale from "../../assets/summer.sale.svg";

export default function SummerSale() {
  return (
    <section className="grid place-items-center p-5 h-auto md:p-14 bg-neutral-900">
      <div className="flex relative">
        <img src={summerSale} alt="promo" className="hover:cursor-pointer" />
      </div>
    </section>
  );
}
