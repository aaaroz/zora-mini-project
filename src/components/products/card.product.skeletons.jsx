import React from "react";
import CardProductSkeleton from "./card.product.skeleton";

export default function CardProductSkeletons() {
  return (
    <>
      <div className="grid grid-cols-1 justify-items-center gap-10 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        <CardProductSkeleton />
        <CardProductSkeleton />
        <CardProductSkeleton />
        <CardProductSkeleton />
        <CardProductSkeleton />
        <CardProductSkeleton />
        <CardProductSkeleton />
        <CardProductSkeleton />
      </div>
    </>
  );
}
