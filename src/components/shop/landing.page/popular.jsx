import React from "react";
import { products } from "../../../recoil";
import { useRecoilValue } from "recoil";
import ButtonShop from "./button.shop";
import { Link } from "react-router-dom";

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
                      <div>
                        <div
                          className="text-sm font-normal text-slate-900 font-['Roboto']"
                          key={index + 1}
                        >
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

      {/* Skeleton v */}
      {/* <div className="w-52 p-1 border border-gray-200 rounded shadow animate-pulse md:p-3">
        <div className="flex w-full items-center justify-center h-48 mb-4 bg-gray-300 rounded">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        </div>
        <div className="h-4 bg-gray-200 rounded-full  w-full mb-4"></div>
        <div className="flex flex-row gap-1 justify-start">
          <div className="h-2 bg-gray-200 rounded-full w-8  mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full w-8  mb-2.5"></div>
        </div>
        <div className="flex flex-row gap-1 justify-start">
          <div className="h-2 bg-gray-200 rounded-full w-8  mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full w-8  mb-2.5"></div>
        </div>
        <div className="flex flex-row gap-1 justify-start">
          <div className="h-2 bg-gray-200 rounded-full w-8  mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full w-8  mb-2.5"></div>
        </div>
        <div className="flex flex-row mt-2 gap-1 justify-end">
          <div className="h-6 w-12 bg-gray-200 rounded-full mb-2 "></div>
          <div className="h-6 w-12 bg-gray-200 rounded-full mb-2"></div>
          <div className="h-6 w-12 bg-gray-200 rounded-full mb-2"></div>
        </div>
      </div> */}
    </section>
  );
}
