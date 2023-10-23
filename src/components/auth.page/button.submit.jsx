import React from "react";

export default function ButtonSubmit({ teks }) {
  return (
    <button
      type="submit"
      className="flex w-full justify-center mt-5 rounded-md bg-neutral-900 px-3 py-1.5 text-sm font-medium leading-6 text-white shadow-sm hover:bg-neutral-950 focus-visible:outline 
focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
    >
      {teks}
    </button>
  );
}
