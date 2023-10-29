import React from "react";
import Navbar from "../navbar";
import Header from "../header";
import Footer from "../footer";
import { useRecoilValue } from "recoil";
import { allBottoms } from "../../../recoil";
import { Link } from "react-router-dom";
import ReactHelmet from "../../react.helmet";

export default function Bottoms() {
  const productsState = useRecoilValue(allBottoms);

  return (
    <>
      <ReactHelmet
        page={"Bottoms"}
        descContent={"page Bottoms"}
        keywordsContent={"bottoms of zora ecommerce"}
      />
      <Navbar />
      <main>
        <Header />
        <section className="flex flex-col w-full items-center h-auto pb-16">
          <h1 className="pt-14 text-center text-1xl font-bold uppercase hover:border-b-4 border-neutral-900 pb-2 md:text-3xl md:pt-20 ">
            Bottoms
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
                    <Link to={`/drops/${product.id}`}>
                      <h2 className="ms-2 text-slate-900 text-base font-bold font-['Roboto'] uppercase tracking-wide">
                        {product.title}
                      </h2>
                    </Link>
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
        </section>
      </main>
      <Footer />
    </>
  );
}
