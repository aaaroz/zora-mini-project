import React, { useEffect } from "react";
import ButtonSubmit from "../auth.page/button.submit";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserSchema } from "../../schema/user.schema";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/get.user.slice";
import { auth, imageDB } from "../../configs/firebase";
import { deleteObject, ref } from "firebase/storage";
import { APIUser } from "../../apis/APIUser";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { uploadPhoto } from "../../utils/upload.photo";
import { IoPerson } from "react-icons/io5";

export default function FormEditProfile() {
  const [user, loading] = useAuthState(auth);
  const stateUser = useSelector(selectUser);
  const navigate = useNavigate();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(UserSchema) });

  useEffect(() => {
    if (loading) return;
  }, []);

  useEffect(() => {
    // checking if user had an profile photo or not
    if (stateUser) {
      // condition when user didn't have profile photo
      stateUser.data.map((data) => {
        setValue("id", `${data.id}`);
        setValue("uid", `${user?.uid}`);
        setValue("name", `${data.name}`);
        setValue("email", `${data.email}`);
      });
    } else if (stateUser.data?.image) {
      // condition when user have an profile photo
      stateUser.data.map((data) => {
        setValue("id", `${data.id}`);
        setValue("uid", `${user?.uid}`);
        setValue("name", `${data.name}`);
        setValue("email", `${data.email}`);
        setValue("image", `${data.image}`);
      });
    }
  }, [setValue, user]);

  const onSubmit = async (user) => {
    // check if user input a new photo
    if (user.image.length === 1) {
      // checking, when user have a photo profile before or not
      if (stateUser?.data[0].image === null) {
        // when user didn't have a photo profile before, then get imageURL and then upload new photo profile and update user data
        const imageURL = await uploadPhoto(user.image[0]);
        const id = user.id;
        const newData = { ...user, image: imageURL };
        APIUser.updateUser(id, newData).then(() => {
          toast.success("Data has been updated!");
          navigate(`/profile/${user.uid}`);
        });
      } else {
        // when user have a photo profile before
        // first, get old photo profile url, then deleted old photo profile
        const photo = stateUser.data[0].image.split("%2F")[1].split("?")[0];
        const imageRef = ref(imageDB, `photos/${photo}`);
        await deleteObject(imageRef);

        // get new imageURL, then update user data
        const imageURL = await uploadPhoto(user.image[0]);
        const id = user.id;
        const newData = { ...user, image: imageURL };
        APIUser.updateUser(id, newData).then(() => {
          toast.success("Data has been updated!");
          navigate(`/profile/${user.uid}`);
        });
      }
      // condition when user didn't upload a new photo profile
    } else {
      // checking, when user have a photo profile before or not.
      if (stateUser?.data[0].image === null) {
        // when user didn't have a photo profile before, then set image value with null
        const image = null;
        const id = user.id;
        const newData = { ...user, image: image };
        APIUser.updateUser(id, newData).then(() => {
          toast.success("Data has been updated!");
          navigate(`/profile/${user.uid}`);
        });
      } else {
        // when user have a photo profile before, then set image value with available photo profile url
        const image = stateUser.data[0].image;
        const id = user.id;
        const newData = { ...user, image: image };
        APIUser.updateUser(id, newData).then(() => {
          toast.success("Data has been updated!");
          navigate(`/profile/${user.uid}`);
        });
      }
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-5 place-items-center md:grid-cols-2">
          <div className="w-full p-5">
            <div className="mb-3">
              <input
                id="id"
                type="text"
                {...register("id")}
                className="w-full rounded-md border-0 py-1 px-2 text-xs md:text-sm
                 text-gray-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-gray-400 
                 focus:ring-1 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6 disabled:bg-neutral-300 hidden"
                disabled
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="uid"
                className="block mb-1 text-sm font-medium leading-6 text-gray-900"
              >
                User Id
              </label>
              <input
                id="uid"
                type="text"
                {...register("uid")}
                className="block w-full rounded-md border-0 py-1 px-2 text-xs md:text-sm
                 text-gray-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-gray-400 
                 focus:ring-1 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6 disabled:bg-neutral-300"
                disabled
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-medium leading-6 text-gray-900"
              >
                Display Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className="block w-full rounded-md border-0 py-1 px-2 text-xs md:text-sm
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
                type="text"
                {...register("email")}
                className="block w-full rounded-md border-0 py-1 px-2 text-xs md:text-sm
                 text-gray-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-gray-400 
                 focus:ring-1 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6 disabled:bg-neutral-300"
                disabled
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-center items-center text-left">
            <label
              htmlFor="image"
              className="mb-1 block text-sm font-medium leading-6 text-gray-900"
            >
              Profile Picture
            </label>
            {stateUser.data[0].image ? (
              <img
                src={stateUser.data[0].image}
                alt="preview"
                className="w-32"
              />
            ) : (
              <span className="p-10 bg-neutral-800 text-4xl text-white">
                <IoPerson />
              </span>
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
        </div>
        <div className="m-10">
          <ButtonSubmit text={"Save"} />
        </div>
      </form>
    </section>
  );
}
