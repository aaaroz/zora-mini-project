import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  fetchGetProducts,
  selectProducts,
  toggleFetchLatestData,
} from "../../store/get.products.slice";
import CardProductSkeletons from "./card.product.skeletons";
import ButtonDelete from "./button.delete";

export default function ListProducts() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const { shouldFetchLatestData } = useSelector(selectProducts);

  useEffect(() => {
    if (shouldFetchLatestData) {
      dispatch(toggleFetchLatestData());
      dispatch(fetchGetProducts());
    }
    dispatch(fetchGetProducts());
  }, [dispatch, shouldFetchLatestData]);

  return (
    <section className="flex flex-col items-center w-full">
      {products.status === "loading" && (
        <div>
          <CardProductSkeletons />
        </div>
      )}
      <section className="grid grid-cols-1 justify-items-center gap-10 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {products.status === "success" &&
          products.data.map((product, index) => (
            <div
              className={`w-52 pt-2 bg-neutral-50 rounded-lg shadow border border-slate-900`}
              key={index}
            >
              <img
                src={product.image}
                alt="jacket"
                className="w-full rounded-lg px-3"
              />
              <div>
                <h2 className="ms-2 text-slate-900 text-base font-bold font-serif uppercase tracking-wide">
                  {product.title}
                </h2>
                <div className="flex flex-row ms-2 items-center">
                  <div className="text-sm font-normal text-slate-900 font-serif">
                    Size :
                  </div>
                  {product.size &&
                    product.size.map((val, index) => (
                      <div key={index + 1}>
                        <div className="text-sm font-normal text-slate-900 font-serif">
                          <span className="text-white">-</span>
                          {val}
                        </div>
                      </div>
                    ))}
                  {!product.size && (
                    <div>
                      <p className="ms-2">-</p>
                    </div>
                  )}
                  {product.size.length === 0 && (
                    <div>
                      <p className="ms-2">-</p>
                    </div>
                  )}
                </div>
                <div className="ms-2 text-sm font-normal text-slate-900 font-serif">
                  <span>Stock : </span>
                  {product.amount}
                </div>
                <div className="ms-2 text-sm font-normal text-slate-900 font-serif">
                  <span>Price : $</span>
                  {product.price}
                </div>
              </div>
              <div className="flex flex-row justify-center content-end items-end my-2 mx-2 gap-2 ">
                <Link to={`/product/${product.id}`}>
                  <button className="rounded-md bg-gray-600 px-2 py-1.5 text-sm font-semibold text-white ">
                    Details
                  </button>
                </Link>
                <Link to={`/edit-product/${product.id}`}>
                  <button className="rounded-md bg-gray-600 px-2 py-1.5 text-sm font-semibold text-white">
                    Edit
                  </button>
                </Link>

                <ButtonDelete id={product.id} />
              </div>
            </div>
          ))}
        {products.status === "failed" && (
          <div>
            <p>API Calls Failed!</p>
          </div>
        )}
      </section>
    </section>
  );
}
