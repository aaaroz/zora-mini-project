import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGetProducts,
  selectProducts,
} from "../../store/get.products.slice";
import CardProductSkeletons from "./card.product.skeletons";
import { Link, useNavigate } from "react-router-dom";
import { APIProduct } from "../../apis/APIProduct";

export default function ListProducts() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      APIProduct.deleteProduct(id).then(() => {
        navigate(0);
      });
    }
  };

  useEffect(() => {
    dispatch(fetchGetProducts());
  }, [dispatch]);

  return (
    <section className="flex flex-col w-full items-center">
      {products.status === "loading" && (
        <div>
          <CardProductSkeletons />
        </div>
      )}
      <section className="grid grid-cols-1 justify-items-center gap-10 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {products.status === "success" &&
          products.data.map((product, index) => (
            <div
              className="w-52 bg-slate-50 rounded-lg shadow border border-slate-900"
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
                      <div>
                        <div
                          className="text-sm font-normal text-slate-900 font-serif"
                          key={index + 1}
                        >
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
                <button
                  className="rounded-md bg-gray-600 px-2 py-1.5 text-sm font-semibold text-white "
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
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
