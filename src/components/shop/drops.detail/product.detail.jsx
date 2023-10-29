import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGetProductById,
  selectProduct,
} from "../../../store/get.product.slice";
import { useParams } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { addToCart } from "../../../store/cart.slice";

export default function ProductDetail() {
  const stateProduct = useSelector(selectProduct);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchGetProductById(id));
  }, [dispatch, id]);

  return (
    <section className="flex flex-col pb-16">
      <div className="flex justify-center">
        <h2 className=" mt-14 text-center text-1xl font-bold uppercase hover:border-b-4 border-neutral-900 pb-2 md:text-3xl">
          Product Details
        </h2>
      </div>
      {stateProduct.status === "loading" && <p>Loading...</p>}
      {stateProduct.status === "success" && (
        <div className="p-10 flex flex-col md:flex-row justify-center items-center">
          <img
            src={stateProduct.data.image}
            alt={stateProduct.data.name}
            className="w-96"
          />
          <div className="pt-4 px-10 ">
            <h1 className="mb-5 md:mb-8 text-2xl md:text-5xl text-center md:text-left font-bold uppercase">
              {stateProduct.data.title}
            </h1>
            <h1 className="text-lg my-3 md:text-2xl text-center md:text-left font-medium">
              ${stateProduct.data.price}
            </h1>

            <div className="flex text-lg md:text-2xl flex-row gap-3 justify-center items-center md:justify-start">
              <p>Available Size :</p>
              {stateProduct.data.size &&
                stateProduct.data.size.map((val, index) => (
                  <div
                    className=" font-normal border-2 p-2 border-neutral-900 text-neutral-900 "
                    key={index + 1}
                  >
                    {val}
                  </div>
                ))}
              {!stateProduct.data.size && (
                <p className="ms-2 capitalize  text-gray-700">none</p>
              )}
            </div>
            <div className="text-lg md:text-2xl text-center md:text-left">
              <p>Description :</p>
              <p>{stateProduct.data.description}</p>
            </div>
            <div className="mt-9 flex justify-start">
              <button
                className="text-xl font-medium py-2 w-full border-2 border-neutral-900"
                onClick={() => dispatch(addToCart(stateProduct.data))}
              >
                Add To Chart
              </button>
            </div>
          </div>
        </div>
      )}
      <a
        href="/drops"
        className="flex justify-center items-center ms-8 w-10 h-10 rounded-sm border border-neutral-900"
      >
        <FaChevronLeft />
      </a>
    </section>
  );
}
