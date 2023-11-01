import React, { useState } from "react";
import zoraIcon from "../assets/zora.svg";
import ButtonSubmit, {
  ButtonSubmitDisable,
} from "../components/auth.page/button.submit";
import ReactHelmet from "../components/react.helmet";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../schema/login.schema";
import { AiOutlineGoogle } from "react-icons/ai";
import { APIAuth } from "../apis/APIAuth";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

export default function Signin() {
  const [isSubmited, setIsSubmited] = useState(false);
  const { search } = useLocation();
  const navigate = useNavigate();

  // configure handle form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  // handle signin with email and password
  const signIn = async ({ email, password }) => {
    setIsSubmited(true);
    try {
      // store credentials
      await APIAuth.signInWithCredentials({ email, password });

      let returnTo = "/";
      const params = new URLSearchParams(search);
      const redirectTo = params.get("return_to");
      // check if there are other routes besides the signin route
      if (redirectTo) {
        // if there is, it will be directed directly to that route
        returnTo += redirectTo;
        toast.success("login successfully!");
        return navigate(returnTo);
      } else {
        // if not, then it will be directed to the landing page
        toast.success("login successfully!");
        return navigate(returnTo);
      }
    } catch (err) {
      console.error(err);
      setIsSubmited(false);
    }
  };

  // // handle signin with google oauth
  const signInWithGoogle = async () => {
    setIsSubmited(true);
    try {
      await APIAuth.signInWithGoogleOAuth();
      let returnTo = "/";
      const params = new URLSearchParams(search);
      const redirectTo = params.get("return_to");
      if (redirectTo) {
        returnTo += redirectTo;
        toast.success("login successfully!");
        return navigate(returnTo);
      } else {
        toast.success("login successfully!");
        return navigate(returnTo);
      }
    } catch (error) {
      console.error(error);
      setIsSubmited(false);
    }
  };

  function ButtonSignIn() {
    if (isSubmited) {
      return <ButtonSubmitDisable text={"Signed in...!"} />;
    } else {
      return <ButtonSubmit text={"Sign In"} />;
    }
  }

  function ButtonSigninWithGoogle() {
    if (isSubmited) {
      return (
        <button
          type="button"
          onClick={signInWithGoogle}
          className="flex w-full justify-center rounded-md bg-neutral-900 px-3 py-1.5 text-sm font-medium leading-7 text-white shadow-sm hover:bg-neutral-950 focus-visible:outline 
focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          disabled
        >
          <span className="text-xl mt-1 me-2">
            <AiOutlineGoogle />
          </span>
          Sign in with google
        </button>
      );
    } else {
      return (
        <button
          type="button"
          onClick={signInWithGoogle}
          className="flex w-full justify-center rounded-md bg-neutral-900 px-3 py-1.5 text-sm font-medium leading-7 text-white shadow-sm hover:bg-neutral-950 focus-visible:outline 
focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          <span className="text-xl mt-1 me-2">
            <AiOutlineGoogle />
          </span>
          Sign in with google
        </button>
      );
    }
  }

  return (
    <>
      <ReactHelmet
        page={"Sign in"}
        descContent={"page sign in"}
        keywordsContent={"sign in to zora ecommerce"}
      />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={zoraIcon} alt="zora" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-neutral-900">
            Sign in to your Admin Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(signIn)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-neutral-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  autoComplete="current-email"
                  className={`block w-full rounded-md py-1.5 ps-2 text-neutral-900 shadow-sm border border-gray-300 focus:border-neutral-900
                  focus:ring-1 focus:outline-none sm:text-sm sm:leading-6 focus:ring-neutral-900 ${
                    errors.email &&
                    "border-red-800 focus:border-red-800 focus:ring-red-800"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-800 text-center text-xs">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-neutral-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  {...register("password")}
                  autoComplete="current-password"
                  className={`block w-full rounded-md py-1.5 ps-2 text-neutral-900 shadow-sm border border-gray-300 focus:border-neutral-900
                  focus:ring-1 focus:outline-none sm:text-sm sm:leading-6 focus:ring-neutral-900 ${
                    errors.password &&
                    "border-red-800 focus:border-red-800 focus:ring-red-800"
                  }`}
                />
                {errors.password && (
                  <p className="text-red-800 text-center text-xs">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <ButtonSignIn />
            </div>
            <div>
              <ButtonSigninWithGoogle />
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?
            <a
              href="/signup"
              className="font-bold leading-6 text-neutral-900 hover:text-neutral-950"
            >
              Sign up and join with us!
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
