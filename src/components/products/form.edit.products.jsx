import React, { useEffect, useState } from "react";
import ButtonSubmit, { ButtonSubmitDisable } from "../auth.page/button.submit";
import { APIProduct } from "../../apis/APIProduct";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ProductSchema } from "../../schema/product.schema";
import {
  selectProduct,
  fetchGetProductById,
} from "../../store/get.product.slice";
import { deleteObject, ref } from "firebase/storage";
import { imageDB } from "../../configs/firebase";
import { toast } from "react-toastify";
import { uploadProduct } from "../../utils/upload.product";

export default function FormEditProduct() {
  const [isSubmited, setIsSubmited] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ProductSchema) });

  const product = useSelector(selectProduct);
  const { id } = useParams();

  useEffect(() => {
    // get product by id
    dispatch(fetchGetProductById(id));
  }, [dispatch, id]);

  useEffect(() => {
    // set old value into a form
    if (product) {
      setValue("id", `${id}`);
      setValue("title", `${product?.data?.title}`);
      setValue("category", `${product?.data?.category}`);
      setValue("description", `${product?.data?.description}`);
      setValue("price", `${product?.data?.price}`);
      setValue("amount", `${product?.data?.amount}`);
      setValue("image", `${product?.data?.image}`);
    }
  }, [product, setValue, id]);

  const onSubmit = async (data) => {
    setIsSubmited(true);
    // if user upload a new product image
    if (data.image.length === 1) {
      // get product image id
      const imageId = product.data.image.split("%2F")[1].split("?")[0];

      // create image reference, then delete image from storage firebase
      const imageRef = ref(imageDB, `productImage/${imageId}`);
      deleteObject(imageRef);

      // get new image url after upload a new product image
      const imageURL = await uploadProduct(data.image[0]);
      const id = data.id;

      //destructure new data, then update product data
      const newData = { ...data, image: imageURL };
      APIProduct.updateProduct(id, newData).then(() => {
        toast.success("Data has been updated!");
        navigate("/products");
      });
    } else {
      const image = product.data.image;
      const id = data.id;
      const newData = { ...data, image: image };
      APIProduct.updateProduct(id, newData).then(() => {
        toast.success("Data has been updated!");
        navigate("/products");
      });
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md justify-center">
          <div className="flex justify-between">
            <h2 className="block text-xl mb-1 font-bold leading-6 text-gray-900">
              Update Product
            </h2>
            <Link to="/products">
              <button className="py-2 px-4 text-xs rounded-md text-white bg-neutral-900 hover:bg-neutral-950">
                Back to list products
              </button>
            </Link>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label
                htmlFor="id"
                className="block mb-1 text-sm font-medium leading-6 text-gray-900"
              >
                Product Id
              </label>
              <input
                id="id"
                type="text"
                {...register("id")}
                className="block w-full rounded-md border-0 py-1 px-2 
                 text-gray-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-gray-400 
                 focus:ring-1 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6 disabled:bg-neutral-300"
                disabled
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="title"
                className="block mb-1 text-sm font-medium leading-6 text-gray-900"
              >
                Product Title
              </label>
              <input
                id="title"
                type="text"
                {...register("title")}
                className="block w-full rounded-md border-0 py-1 px-2 
             text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
             focus:ring-1 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
              />
              {errors.title && (
                <p className="text-red-800 text-center text-xs ">
                  {errors.title.message}
                </p>
              )}
            </div>
            <div className=" mb-3">
              <label
                htmlFor="category"
                className="block mb-1 text-sm font-medium leading-6 text-gray-900"
              >
                Product Category
              </label>
              <select
                id="category"
                {...register("category")}
                className="block w-full rounded-md border-0 py-1.5 px-2
             text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
             focus:ring-0.1 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
              >
                <option value="">Choose one category</option>
                <option value="Hoodie">Hoodie</option>
                <option value="T-Shirt">T-Shirt</option>
                <option value="Bottoms">Bottoms</option>
                <option value="Jacket">Jacket</option>
                <option value="Accessories">Accessories</option>
              </select>
              {errors.category && (
                <p className="text-red-800 text-center text-xs">
                  {errors.category.message}
                </p>
              )}
            </div>
            <div className="mb-3">
              <label
                htmlFor="image"
                className="mb-1 block text-sm font-medium leading-6 text-gray-900"
              >
                Product Image
              </label>
              {product?.data?.image && (
                <img
                  src={product?.data?.image}
                  alt="preview"
                  className="w-36"
                />
              )}
              <input
                type="file"
                id="image"
                {...register("image")}
                accept="image/png, image/jpg, image/jpeg"
                className="block w-full text-sm text-neutral-900 border border-gray-300 rounded-lg cursor-pointer 
            bg-gray-50 focus:outline-none"
              />
              {errors.image && (
                <p className="text-red-800 text-center text-xs">
                  {errors.image.message}
                </p>
              )}
            </div>
            <div className="mb-3">
              <label
                htmlFor="price"
                className="mb-1 block text-sm font-medium leading-6 text-gray-900"
              >
                Product Price
              </label>
              <div
                className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 
        focus-within:ring-inset focus-within:ring-neutral-900 sm:max-w-md md:max-w-full"
              >
                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                  $
                </span>
                <input
                  type="number"
                  id="price"
                  {...register("price")}
                  className="block flex-1 border-0 bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 
            focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.price && (
                <p className="text-red-800 text-center text-xs">
                  {errors.price.message}
                </p>
              )}
            </div>
            <div className="mb-3">
              <div className="flex flex-row">
                <p className="mb-1 text-xs font-normal text-blue-gray-400 ">
                  Current Available Size :
                </p>
                {product?.data?.size &&
                  product?.data?.size.map((val, index) => (
                    <div key={index + 1}>
                      <div className="text-xs font-normal text-blue-gray-400 ">
                        <span className="text-white">-</span>
                        {val}
                      </div>
                    </div>
                  ))}
              </div>
              <label
                htmlFor="size"
                className="mb-1 block text-sm font-medium leading-6 text-gray-900"
              >
                Available Product Size
              </label>

              <div className="flex items-center mb-1">
                <input
                  type="checkbox"
                  id="M"
                  value="M"
                  {...register("size", { required: "Size box is required" })}
                  className="w-4 h-4 text-gray-900 ring-neutral-900 rounded focus:ring-neutral-800"
                />
                <label
                  htmlFor="M"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  M
                </label>
              </div>
              <div className="flex items-center mb-1">
                <input
                  type="checkbox"
                  id="L"
                  value="L"
                  {...register("size", { required: "Size box is required" })}
                  className="w-4 h-4 text-gray-900 ring-neutral-900 rounded focus:ring-neutral-800"
                />
                <label
                  htmlFor="L"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  L
                </label>
              </div>
              <div className="flex items-center mb-1">
                <input
                  type="checkbox"
                  id="XL"
                  value="XL"
                  {...register("size", { required: "Size box is required" })}
                  className="w-4 h-4 text-gray-900 ring-neutral-900 rounded focus:ring-neutral-800"
                />
                <label
                  htmlFor="XL"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  XL
                </label>
              </div>
              <div className="flex items-center mb-1">
                <input
                  type="checkbox"
                  id="XXL"
                  value="XXL"
                  {...register("size", { required: "Size box is required" })}
                  className="w-4 h-4 text-gray-900 ring-neutral-900 rounded focus:ring-neutral-800"
                />
                <label
                  htmlFor="XL"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  XXL
                </label>
              </div>
              {errors.size && (
                <p className="text-red-800 text-center text-xs">
                  {errors.size.message}
                </p>
              )}
            </div>
            <div className="mb-3">
              <label
                htmlFor="amount"
                className="mb-1 block text-sm font-medium leading-6 text-gray-900"
              >
                Amount of products
              </label>
              <input
                type="number"
                id="amount"
                {...register("amount")}
                className="block w-full rounded-md border-0 py-1.5 px-2 
             text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-800
             focus:ring-1 focus:ring-inset focus:ring-gray-800 focus:border-slate-800 sm:text-sm sm:leading-6"
              />
              {errors.amount && (
                <p className="text-red-800 text-center text-xs">
                  {errors.amount.message}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="description"
                className="mb-1 block text-sm font-medium leading-6 text-gray-900"
              >
                Product Description
              </label>
              <textarea
                type="text"
                id="description"
                {...register("description")}
                className="block w-full rounded-md border-0 py-1 px-2 
          text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
          focus:ring-1 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
              />
              {errors.description && (
                <p className="text-red-800 text-center text-xs">
                  {errors.description.message}
                </p>
              )}
            </div>
            <div className="mb-2">
              {isSubmited ? (
                <ButtonSubmitDisable text={"Product Updated"} />
              ) : (
                <ButtonSubmit text={"Update Product"} />
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
