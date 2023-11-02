import React from "react";
import ButtonSubmit from "../../auth.page/button.submit";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { OrderSchema } from "../../../schema/order.schema";
import { TooltipWithHelper } from "./tooltip.helper";
import { useRecoilValue } from "recoil";
import { price } from "../../../recoil";
import { serverTimestamp } from "firebase/firestore";
import { APIOrder } from "../../../apis/APIOrder";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, selectCart } from "../../../store/cart.slice";

export default function FormOrder() {
  const stateTotalPrice = useRecoilValue(price);
  const { data: products } = useSelector(selectCart);

  const navigate = useNavigate(0);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(OrderSchema) });

  const onSubmit = (data) => {
    const newData = {
      ...data,
      products: products,
      totalPrice: stateTotalPrice,
      status: "ongoing",
      createdAt: serverTimestamp(),
    };
    APIOrder.addOrder(newData).then(() => {
      dispatch(deleteCart());
      toast.success("Order Submited Successfully!");
      navigate("/");
    });
  };

  return (
    <section className="flex min-h-full flex-1 flex-col justify-center lg:px-8">
      <h1 className="flex ms-20 pt-4 text-left text-2xl font-bold capitalize">
        Order Details
        <span>
          <TooltipWithHelper />
        </span>
      </h1>

      <div className="px-8 sm:mx-auto sm:w-full sm:max-w-md justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label
              htmlFor="name"
              className="block mb-1 text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              className="block w-full rounded-md border-0 py-1 px-2 
                 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                 focus:ring-1 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
            />
            {errors.name && (
              <p className="text-red-800 text-center text-xs ">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="block w-full rounded-md border-0 py-1 px-2 
                 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                 focus:ring-1 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
            />
            {errors.email && (
              <p className="text-red-800 text-center text-xs ">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-3">
            <label
              htmlFor="phone"
              className="mb-1 block text-sm font-medium leading-6 text-gray-900"
            >
              Phone Number
            </label>
            <div
              className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 
            focus-within:ring-inset focus-within:ring-neutral-900 sm:max-w-md md:max-w-full"
            >
              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                +62
              </span>
              <input
                type="number"
                id="phone"
                {...register("phone")}
                className="block flex-1 border-0 bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 
                focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
            {errors.phone && (
              <p className="text-red-800 text-center text-xs">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="address"
              className="mb-1 block text-sm font-medium leading-6 text-gray-900"
            >
              Shipping Address
            </label>
            <textarea
              type="text"
              id="address"
              {...register("address")}
              className="block w-full rounded-md border-0 py-1 px-2 
              text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
              focus:ring-1 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
            />
            {errors.address && (
              <p className="text-red-800 text-center text-xs">
                {errors.address.message}
              </p>
            )}
          </div>
          <div className="mb-2">
            <ButtonSubmit text={"Make Order"} />
          </div>
        </form>
      </div>
    </section>
  );
}
