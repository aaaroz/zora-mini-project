import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  fetchGetProducts,
  selectProducts,
  toggleFetchLatestProducts,
} from "../../store/get.products.slice";
import {
  fetchGetProductCategory,
  selectProductsByCategory,
} from "../../store/get.product.category.slice";
import ButtonDelete from "./button.delete";
import CardProductSkeleton from "./card.product.skeleton";

export default function ListProducts() {
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const { shouldFetchLatestProducts } = useSelector(selectProducts);
  const productsByCategory = useSelector(selectProductsByCategory);

  useEffect(() => {
    if (shouldFetchLatestProducts) {
      dispatch(toggleFetchLatestProducts());
      dispatch(fetchGetProducts());
    }
    dispatch(fetchGetProducts());
    dispatch(fetchGetProductCategory(category));
  }, [dispatch, shouldFetchLatestProducts]);

  const handleChange = (e) => {
    const value = e.target.value;
    setCategory(value);
    dispatch(fetchGetProductCategory(value));
  };

  return (
    <section className="flex flex-col items-center w-full">
      <div className="p-3 ms-16 mb-3 self-start">
        <select
          name="category"
          onChange={handleChange}
          className="rounded-md border-0 py-1.5 px-5
        text-neutral-900 shadow-sm ring-1 ring-inset cursor-pointer ring-neutral-300
        focus:ring-0.1 focus:ring-inset focus:ring-neutral-900 sm:text-sm sm:leading-6"
        >
          <option value="">All Category</option>
          <option value="Hoodie">Hoodie</option>
          <option value="T-Shirt">T-Shirt</option>
          <option value="Bottoms">Bottoms</option>
          <option value="Jacket">Jacket</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>
      <section className="grid grid-cols-1 justify-items-center gap-10 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {products.status === "loading" &&
          products?.data?.map(({ title }) => (
            <div key={title}>
              <CardProductSkeleton />
            </div>
          ))}
        {products.status === "success" &&
          products?.data?.map((product, index) => (
            <div
              className={`w-52 pt-2 bg-neutral-50 rounded-lg shadow border border-slate-900 ${
                productsByCategory?.data?.length > 0 && "hidden"
              }`}
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
                    product?.size?.map((val, index) => (
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
                  {product?.size?.length === 0 && (
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

        {productsByCategory?.status === "success" ? (
          productsByCategory?.data?.map((product, index) => (
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
                    product?.size?.map((val, index) => (
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
                  {product?.size?.length === 0 && (
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
          ))
        ) : (
          <></>
        )}

        {products.status === "failed" && (
          <div>
            <p>API Calls Failed!</p>
          </div>
        )}
      </section>
    </section>
  );
}
