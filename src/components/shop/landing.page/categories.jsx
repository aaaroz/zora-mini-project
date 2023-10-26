import React from "react";
import sampleHoodie from "../../../assets/sample.hoodie.svg";
import sampleTshirt from "../../../assets/sample.tshirt.svg";
import sampleBottom from "../../../assets/sample.bottoms.svg";
import sampleJacket from "../../../assets/sample.jacket.svg";
import ButtonShop from "./button.shop";

export default function Categories() {
  return (
    <section className="flex flex-col w-full items-center h-auto pb-16">
      <h1 className="pt-14 text-center text-1xl font-bold uppercase hover:border-b-4 border-neutral-900 pb-2 md:text-3xl md:pt-20 ">
        top categories
      </h1>

      <div className="grid mt-24 grid-cols-1 gap-8 justify-items-center xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
        <div className="flex relative w-52 bg-slate-50 rounded-lg shadow-sm border cursor-pointer border-slate-200 py-5">
          <img
            src={sampleBottom}
            alt="sample"
            className="w-full rounded-lg px-3"
          />
          <h3 className="uppercase font-semibold text-xl absolute bottom-24 left-9 hover:py-2 py-1 px-4 border-t-4 border-b-4 border-slate-200 text-blue-gray-50">
            Bottoms
          </h3>
        </div>
        <div className="flex relative w-52 bg-slate-50 rounded-lg shadow-sm border cursor-pointer border-slate-200 py-5">
          <img
            src={sampleHoodie}
            alt="sample"
            className="w-full rounded-lg px-3 object-fill"
          />
          <h3 className="uppercase font-semibold text-xl absolute bottom-24 left-12 hover:py-2 py-1 px-4 border-t-4 border-b-4 border-slate-200 text-blue-gray-50">
            Hoodie
          </h3>
        </div>
        <div className="flex relative w-52 bg-slate-50 rounded-lg shadow-sm border cursor-pointer border-slate-200 py-5">
          <img
            src={sampleJacket}
            alt="sample"
            className="w-full rounded-lg px-3"
          />
          <h3 className="uppercase font-semibold text-xl absolute bottom-24 left-12 hover:py-2 py-1 px-4 border-t-4 border-b-4 border-slate-200 text-blue-gray-50">
            jacket
          </h3>
        </div>
        <div className="flex relative w-52 bg-slate-50 rounded-lg shadow-sm border cursor-pointer border-slate-200 py-5">
          <img
            src={sampleTshirt}
            alt="sample"
            className="w-full rounded-lg px-3"
          />
          <h3 className="uppercase font-semibold text-xl absolute bottom-24 left-12 hover:py-2 py-1 px-4 border-t-4 border-b-4 border-slate-200 text-blue-gray-50">
            t-shirt
          </h3>
        </div>
      </div>

      <ButtonShop teks={`Read more`} />
    </section>
  );
}
