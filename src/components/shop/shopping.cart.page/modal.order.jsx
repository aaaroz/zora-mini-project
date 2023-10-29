import { Modal } from "flowbite-react";
import React from "react";
import FormOrder from "./form.order";

export default function ModalOrder({ isShow, handleClose, handleShow }) {
  return (
    <div className="flex justify-center m-12 mb-20">
      <button
        className="text-lg md:text-xl font-medium py-2 px-20 md:px-60 w-auto border-2 border-neutral-900"
        onClick={handleShow}
      >
        Make Order
      </button>

      <Modal show={isShow === "show"} onClose={handleClose}>
        <Modal.Header>Make Order</Modal.Header>
        <Modal.Body>
          <FormOrder />
        </Modal.Body>
        <Modal.Footer className="justify-end">
          <button
            className="rounded-md bg-gray-600 px-4 py-1.5 text-sm font-semibold leading-6 text-white"
            onClick={handleClose}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
