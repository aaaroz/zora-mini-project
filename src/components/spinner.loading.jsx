import { Spinner } from "@material-tailwind/react";
import React from "react";

export default function SpinnerLoading() {
  return (
    <div className="flex flex-col items-center p-28 w-screen h-screen">
      <Spinner className="h-10 w-10 mb-5 text-neutral-900/50" />
      <p>Please Wait a Second...</p>
    </div>
  );
}
