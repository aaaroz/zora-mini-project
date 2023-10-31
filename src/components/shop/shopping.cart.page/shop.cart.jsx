import React, { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { selectCart } from "../../../store/cart.slice";
import { useSelector } from "react-redux";
import ModalOrder from "./modal.order";
import { useRecoilState } from "recoil";
import { price } from "../../../recoil";

const TABLE_HEAD = ["No", "Name", "Image", "Price", "Quantity"];

export default function ShopCart() {
  const [isShow, setIsShow] = useState("");
  const [stateTotalPrice, setStateTotalPrice] = useRecoilState(price);

  const handleShow = () => setIsShow("show");
  const handleClose = () => setIsShow(undefined);

  const { data: products, totalProducts } = useSelector(selectCart);

  let totalPrice = 0;

  function getTotalPrice() {
    products.map((product) => {
      totalPrice += product.price;
      setStateTotalPrice(totalPrice);
    });
    return totalPrice;
  }

  return (
    <section
      className="flex flex-col items-center"
      onLoad={() => getTotalPrice()}
    >
      <h1 className="pt-14 text-center text-1xl font-bold uppercase hover:border-b-4 border-neutral-900 pb-2 md:text-3xl md:pt-20 ">
        Shopping Cart
      </h1>
      <div className="w-screen px-16">
        <Card className="mt-16 w-full h-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-neutral-900 bg-neutral-900 p-4 "
                  >
                    <Typography
                      variant="small"
                      color="white"
                      className="font-normal leading-none"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map(({ title, image, price }, index) => {
                const isLast = index === products.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-neutral-950";

                return (
                  <tr
                    key={index}
                    className="odd:bg-neutral-600 even:bg-neutral-500"
                  >
                    <td className={classes}>
                      <Typography
                        variant="paragraph"
                        color="white"
                        className="font-normal"
                      >
                        {index + 1}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="paragraph"
                        color="white"
                        className="font-normal"
                      >
                        {title}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <img src={image} alt="product" className="w-14" />
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="paragraph"
                        color="white"
                        className="font-normal"
                      >
                        ${price}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="paragraph"
                        color="white"
                        className="font-normal"
                      >
                        1
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
        <div className="mt-8 mx-2 md:mx-24 capitalize font-medium text-sm md:text-lg md:flex md:justify-between">
          <p>items total : {totalProducts}</p>
          <p>
            total price : <span className="font-bold">${stateTotalPrice}</span>
          </p>
        </div>
        <ModalOrder
          handleClose={handleClose}
          handleShow={handleShow}
          isShow={isShow}
        />
      </div>
    </section>
  );
}
