import React, { useState } from "react";
import { Modal } from "flowbite-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { toggleFetchLatestData } from "../../store/get.orders.slice";
import { APIOrder } from "../../apis/APIOrder";

export default function OrderDetail({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [stateOrder, setStateOrder] = useState(null);
  const [isSubmited, setIsSubmited] = useState(false);
  const dispatch = useDispatch();
  const { register, setValue, handleSubmit } = useForm();

  async function getOrder() {
    await APIOrder.getOrder(id).then((order) => setStateOrder(order));
    setValue("status", `${stateOrder?.status}`);
  }

  function OrderDate() {
    if (stateOrder) {
      const { createdAt } = stateOrder;
      const newDate = new Date(
        createdAt.seconds * 1000 + createdAt.nanoseconds / 1000000
      );
      const orderDate = newDate.toDateString();

      return (
        <div>
          <p>Date : {orderDate}</p>
        </div>
      );
    }
  }

  const onSubmit = ({ status }) => {
    setIsSubmited(true);
    const orderId = id;
    const newData = { ...stateOrder, status: status };
    APIOrder.updateOrder(orderId, newData).then(() => {
      dispatch(toggleFetchLatestData());
      toast.success("Orders Updated Successfully!");
      setIsOpen(!isOpen);
      setIsSubmited(false);
    });
  };

  useEffect(() => {
    if (isOpen) {
      getOrder();
    }
    getOrder();
  }, [isOpen]);
  return (
    <>
      <button
        className="font-medium flex text-white text-xl"
        onClick={() => setIsOpen(true)}
      >
        ...
      </button>
      <Modal show={isOpen} size="md" popup onClose={() => setIsOpen(!isOpen)}>
        <Modal.Header>
          <div className="px-5 pt-3 text-md">Orders Detail</div>
        </Modal.Header>
        <Modal.Body>
          <div className="p-2 m-5 mt-2 text-md">
            <div>
              <p>Name : {stateOrder?.name}</p>
            </div>
            <div>
              <p>Email : {stateOrder?.email}</p>
            </div>
            <div>
              <p>Phone : +62{stateOrder?.phone}</p>
            </div>
            <div>
              <p>Total Price : ${stateOrder?.totalPrice}</p>
            </div>
            <div>
              <p>Address : {stateOrder?.address}</p>
            </div>
            <OrderDate />
            <div>
              <p>Products Ordered: </p>

              {stateOrder?.products ? (
                stateOrder?.products.map(({ title }, index) => (
                  <div key={index} className="capitalize">
                    <span>- </span>
                    {title}
                  </div>
                ))
              ) : (
                <p>None</p>
              )}
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-center mb-3">
                <label htmlFor="status">Status : </label>
                <select
                  id="status"
                  {...register("status")}
                  className="mx-3 rounded-md border-0 py-1.5
                text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                focus:ring-0.1 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
                >
                  <option value="ongoing">ongoing</option>
                  <option value="delivered">delivered</option>
                  <option value="canceled">canceled</option>
                </select>
              </div>
              {isSubmited ? (
                <button
                  className="py-2 px-5 rounded-md text-sm text-white bg-neutral-900 hover:bg-neutral-950 disabled:bg-neutral-700"
                  type="submit"
                  disabled
                >
                  Saved!
                </button>
              ) : (
                <button
                  className="py-2 px-5 rounded-md text-sm text-white bg-neutral-900 hover:bg-neutral-950"
                  type="submit"
                >
                  Save
                </button>
              )}
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
