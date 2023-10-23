import React from "react";
import zoraIcons from "../assets/zora.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SignupSchema } from "../schema/signup.schema";
import ButtonSubmit from "../components/auth.page/button.submit";
import { APIAuth } from "../apis/APIAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (data) => {
    const name = data.firstName + data.lastName;
    APIAuth.signUpWithEmailPassword(data.email, data.password, name);
    toast.success("welcome new admin!, please login to access dashboard!");
    navigate("/signin");
  };

  return (
    <>
      <div className="flex flex-1 flex-col justify-center mt-20 px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={zoraIcons} alt="zora" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-neutral-900">
            Sign up your Admin Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="firstName"
                  type="text"
                  {...register("firstName")}
                  className={`block w-full rounded-md py-1.5 ps-2 text-neutral-900 shadow-sm border border-gray-300 focus:border-neutral-900
                  focus:ring-1 focus:outline-none sm:text-sm sm:leading-6 focus:ring-neutral-900 ${
                    errors.firstName &&
                    "border-red-800 focus:border-red-800 focus:ring-red-800"
                  }`}
                />
                {errors.firstName ? (
                  <p className="text-red-800 text-xs text-center">
                    {errors.firstName.message}
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="lastName"
                  type="text"
                  {...register("lastName")}
                  className={`block w-full rounded-md py-1.5 ps-2 text-neutral-900 shadow-sm border border-gray-300 focus:border-neutral-900
                  focus:ring-1 focus:outline-none sm:text-sm sm:leading-6 focus:ring-neutral-900 ${
                    errors.lastName &&
                    "border-red-800 focus:border-red-800 focus:ring-red-800"
                  }`}
                />
                {errors.lastName ? (
                  <p className="text-red-800 text-xs text-center">
                    {errors.lastName.message}
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  type="text"
                  {...register("username")}
                  className={`block w-full rounded-md py-1.5 ps-2 text-neutral-900 shadow-sm border border-gray-300 focus:border-neutral-900
                  focus:ring-1 focus:outline-none sm:text-sm sm:leading-6 focus:ring-neutral-900 ${
                    errors.username &&
                    "border-red-800 focus:border-red-800 focus:ring-red-800"
                  }`}
                />
                {errors.username ? (
                  <p className="text-red-800 text-xs text-center">
                    {errors.username.message}
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className={`block w-full rounded-md py-1.5 ps-2 text-neutral-900 shadow-sm border border-gray-300 focus:border-neutral-900
                  focus:ring-1 focus:outline-none sm:text-sm sm:leading-6 focus:ring-neutral-900 ${
                    errors.email &&
                    "border-red-800 focus:border-red-800 focus:ring-red-800"
                  }`}
                />
                {errors.email ? (
                  <p className="text-red-800 text-xs text-center">
                    {errors.email.message}
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  {...register("password")}
                  className={`block w-full rounded-md py-1.5 ps-2 text-neutral-900 shadow-sm border border-gray-300 focus:border-neutral-900
                  focus:ring-1 focus:outline-none sm:text-sm sm:leading-6 focus:ring-neutral-900 ${
                    errors.password &&
                    "border-red-800 focus:border-red-800 focus:ring-red-800"
                  }`}
                />
                {errors.password ? (
                  <p className="text-red-800 text-xs text-center">
                    {errors.password.message}
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword")}
                  className={`block w-full rounded-md py-1.5 ps-2 text-neutral-900 shadow-sm border border-gray-300 focus:border-neutral-900
                  focus:ring-1 focus:outline-none sm:text-sm sm:leading-6 focus:ring-neutral-900 ${
                    errors.confirmPassword &&
                    "border-red-800 focus:border-red-800 focus:ring-red-800"
                  }`}
                />
                {errors.confirmPassword ? (
                  <p className="text-red-800 text-xs text-center">
                    {errors.confirmPassword.message}
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div>
              <ButtonSubmit teks={"Sign Up"} />
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already becomes an admin?{" "}
            <a
              href="/#"
              className="font-bold leading-6 text-neutral-900 hover:text-neutral-950"
            >
              Sign in to Dashboard
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
