import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/cart.slice";

export default function Cart() {
  const { data: products, totalProducts } = useSelector(selectCart);
  return (
    <div className="relative">
      <HiOutlineShoppingCart />
      <span
        className={`absolute -right-3 -top-1 text-xs px-1 rounded-full text-center bg-red-600 ${
          totalProducts === 0 && "hidden"
        }`}
      >
        {totalProducts}
      </span>
    </div>
  );
}
