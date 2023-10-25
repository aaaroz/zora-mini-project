import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { UserSchema } from "../../schema/user.schema";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetUserById, selectUser } from "../../store/get.user.slice";
import { auth, imageDB } from "../../configs/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { APIUser } from "../../apis/APIUser";
import { v4 } from "uuid";
import ButtonSubmit from "../auth.page/button.submit";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";

export default function FormEditProfile() {
  const [imageUrl, setImageUrl] = useState("");
  const [data, setData] = useState(null);
  const [user, loading] = useAuthState(auth);
  const stateUser = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(UserSchema) });

  useEffect(() => {
    if (loading) return;
    const timer = setTimeout(() => {
      dispatch(fetchGetUserById(user?.uid));
      stateUser?.data?.map((data) => {
        setData(data);
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, user]);

  useEffect(() => {
    if (data) {
      setValue("id", `${data.id}`);
      setValue("uid", `${user?.uid}`);
      setValue("name", `${data.name}`);
      setValue("email", `${data.email}`);
    } else if (data?.image) {
      setValue("id", `${data.id}`);
      setValue("uid", `${user?.uid}`);
      setValue("name", `${data.name}`);
      setValue("email", `${data.email}`);
      setValue("image", `${data.image}`);
    }
  }, [data, setValue, user]);

  const handleImage = (e) => {
    const image = e.target.files[0];
    const images = ref(imageDB, `ProfilePictures/${v4()}`);
    uploadBytes(images, image).then((data) => {
      getDownloadURL(data.ref).then((val) => {
        setImageUrl(val);
      });
    });
  };

  const onSubmit = (user) => {
    if (user.image.length === 1) {
      const id = user.id;
      const newData = { ...user, image: imageUrl };
      APIUser.updateUser(id, newData).then(() => {
        toast.success("Data has been updated!");
        navigate(`/profile/${user.uid}`);
      });
    } else if (user.image.length === 0) {
      const image = null;
      const id = user.id;
      const newData = { ...user, image: image };
      APIUser.updateUser(id, newData).then(() => {
        toast.success("Data has been updated!");
        navigate(`/profile/${user.uid}`);
      });
    } else {
      const image = data?.image;
      const id = user.id;
      const newData = { ...user, image: image };
      APIUser.updateUser(id, newData).then(() => {
        toast.success("Data has been updated!");
        navigate(`/profile/${user.uid}`);
      });
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
            {imageUrl && <img src={imageUrl} alt="preview" className="w-36" />}
            <input
              type="file"
              id="image"
              {...register("image")}
              onChange={handleImage}
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
