import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetProductById, selectProduct } from "../store/get.product.slice";
import { Link, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { sidebarIsActive } from "../recoil";
import { DrawerWithNav } from "../components/products/drawer.nav";
import Sidebar from "../components/products/sidebar";
import Header from "../components/dashboard/header";
import ReactHelmet from "../components/react.helmet";

export default function ProductDetails() {
  const isActive = useRecoilValue(sidebarIsActive);
  const stateProduct = useSelector(selectProduct);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchGetProductById(id));
  }, [dispatch, id]);

  return (
    <>
      <ReactHelmet
        page={"Detail Products"}
        descContent={"page detail product"}
        keywordsContent={"detail product of zora ecommerce"}
      />
      <DrawerWithNav isActive={isActive} />
      <Sidebar isActive={isActive} />
      <Header />
      <section className="p-4 lg:ml-64">
        <div className="flex p-4  md:px-24 justify-between">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight uppercase text-gray-900">
            Product Details
          </h2>
          <Link to="/products">
            <button className="me-5 rounded-md bg-neutral-900 hover:bg-neutral-950 px-3 py-1.5 text-sm font-medium leading-6 text-white">
              Back to Products
            </button>
          </Link>
        </div>

        {stateProduct.status === "loading" && <p>Loading...</p>}
        {stateProduct.status === "success" && (
          <section className="grid grid-cols-1 gap-10 md:grid-cols-2 p-4 px-24">
            <div key={id}>
              <h2 className="text-based text-xl font-bold tracking-tight uppercase py-4 text-gray-900">
                {stateProduct.data.title}
              </h2>
              <h4 className=" text-based text-md font-medium tracking-tight text-gray-900">
                Description : {stateProduct.data.description}
              </h4>
              <h4 className=" text-based text-md font-medium tracking-tight text-gray-900">
                Category : {stateProduct.data.category}
              </h4>
              <p>Available Size :</p>

              {stateProduct.data.size &&
                stateProduct.data.size.map((val, index) => (
                  <div>
                    <div
                      className="text-sm font-normal text-neutral-900"
                      key={index + 1}
                    >
                      <span>- </span>
                      {val}
                    </div>
                  </div>
                ))}
              {!stateProduct.data.size && (
                <div>
                  <p className="ms-2 text-gray-700">none</p>
                </div>
              )}
              {stateProduct.data.size.length === 0 && (
                <div>
                  <p className="ms-2 text-gray-700">none</p>
                </div>
              )}
              <p className=" text-based text-md font-medium tracking-tight text-gray-900">
                Price : ${stateProduct.data.price}
              </p>
              <p className=" text-based text-md font-medium tracking-tight text-gray-900">
                Created by : {stateProduct.data.admin}
              </p>
            </div>
            <div className="w-auto">
              <img
                src={stateProduct.data.image}
                alt={stateProduct.data.title}
              />
            </div>
          </section>
        )}
        {stateProduct.status === "failed" && (
          <div>
            <p>Something Went Wrong</p>
            <p>{stateProduct.data.message}</p>
          </div>
        )}
      </section>
    </>
  );
}
