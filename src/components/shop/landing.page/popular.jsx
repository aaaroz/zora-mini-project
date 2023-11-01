import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../../recoil";
import { useRecoilValue } from "recoil";

import ButtonShop from "./button.shop";

export default function Popular() {
  const productsState = useRecoilValue(products);

  return (
    <section className="flex flex-col w-full items-center h-auto pb-16">
      <h1 className="pt-14 text-center text-1xl font-bold uppercase hover:border-b-4 border-neutral-900 pb-2 md:text-3xl md:pt-20 ">
        Popular products
      </h1>

      <div className="grid mt-24 grid-cols-1 gap-8 justify-items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
        {productsState &&
          productsState.map((product, index) => (
            <div
              className="w-52 bg-slate-50 rounded-lg shadow-sm border border-slate-200 py-5"
              key={product.id + index}
            >
              <img
                src={product.image}
                alt="jacket"
                className="w-full rounded-lg px-3"
              />
              <div>
                <h2 className="ms-2 text-slate-900 text-base font-bold font-['Roboto'] uppercase tracking-wide">
                  {product.title}
                </h2>
                <div className="flex flex-row ms-2">
                  <div className="text-sm font-normal text-slate-900 font-['Roboto']">
                    Size :
                  </div>
                  {product.size &&
                    product.size.map((val, index) => (
                      <div key={index + 1}>
                        <div className="text-sm font-normal text-slate-900 font-['Roboto']">
                          <span className="text-white">-</span>
                          {val}
                        </div>
                      </div>
                    ))}
                </div>
                <div className="ms-2 text-sm font-normal text-slate-900 font-['Roboto']">
                  <span>Stock : </span>
                  {product.amount}
                </div>
                <div className="ms-2 text-sm font-normal text-slate-900 font-['Roboto']">
                  <span>Price : $</span>
                  {product.price}
                </div>
              </div>
            </div>
          ))}
      </div>
      <Link to="/drops">
        <ButtonShop teks={`read more`} />
      </Link>
    </section>
  );
}
