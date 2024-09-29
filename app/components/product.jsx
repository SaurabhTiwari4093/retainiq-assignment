import Image from "next/image";
import React from "react";

function ProductWrapper({ children }) {
  return (
    <div className="bg-white border-dashed border border-gray-300 rounded h-48 p-4">
      {children}
    </div>
  );
}

function ProductFilterTag({ text, color = "gray" }) {
  return (
    <div
      className={`bg-${color}-50 border border-${color}-200 text-${color}-600 shadow-sm rounded py-1 px-2 text-nowrap`}
    >
      {text}
    </div>
  );
}

export function Product() {
  return (
    <ProductWrapper>
      <div className="h-full flex flex-col gap-2">
        <div className="h-36 relative">
          <Image
            src={"/images/1.jpg"}
            alt={"Product"}
            fill={true}
            className="rounded object-cover object-top"
          />
        </div>
        <div className="text-sm font-medium text-center">Anniversary Sale</div>
      </div>
    </ProductWrapper>
  );
}

export function ProductFilter() {
  return (
    <ProductWrapper>
      <div className="h-full flex gap-2 text-xs font-medium justify-center items-center">
        <ProductFilterTag text="Product Collection" />
        <ProductFilterTag text="contains" color="green" />
        <ProductFilterTag text="Anakali Kurtas" />
      </div>
    </ProductWrapper>
  );
}
