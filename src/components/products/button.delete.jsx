import React, { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Button, Modal } from "flowbite-react";
import { useDispatch } from "react-redux";
import { deleteObject, ref } from "firebase/storage";
import { toast } from "react-toastify";
import { GetProduct } from "../../utils/get.product";
import { imageDB } from "../../configs/firebase";
import { toggleFetchLatestProducts } from "../../store/get.products.slice";
import { APIProduct } from "../../apis/APIProduct";
import { toggleFetchLatestProductsCategory } from "../../store/get.product.category.slice";

export default function ButtonDelete({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    // get product by id
    const product = await GetProduct(id);
    // get image id for delete product image in storage
    const imageId = product?.image.split("%2F")[1].split("?")[0];
    // create image reference
    const imageRef = ref(imageDB, `productImage/${imageId}`);
    await deleteObject(imageRef);
    APIProduct.deleteProduct(id);

    dispatch(toggleFetchLatestProducts());
    dispatch(toggleFetchLatestProductsCategory());
    toast.warn("Product Deleted Successfully!");
  };

  return (
    <>
      <button
        className="rounded-md bg-gray-600 px-2 py-1.5 text-sm font-semibold text-white"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        Delete
      </button>
      <Modal show={isOpen} size="md" popup onClose={() => setIsOpen(!isOpen)}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-neutral-800" />
            <h3 className="mb-5 text-lg font-normal text-neutral-800 ">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => handleDelete(id).then(setIsOpen(!isOpen))}
              >
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setIsOpen(!isOpen)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
