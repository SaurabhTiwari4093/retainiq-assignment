"use client";
import React, { useEffect, useState } from "react";
import ContentCenter from "./contentCenter";
import Image from "next/image";
import { CancelIcon } from "../assets/icons";

export default function CollectionModal({ setShowModal, onSelectProduct }) {
  const [collectionData, setCollectionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setCollectionData(data);
      } catch (e) {
        console.log("Error in fetching data", e);
      }
    };

    fetchData();
  }, []);

  return (
    <ContentCenter className="fixed top-0 left-0 h-screen w-full bg-black bg-opacity-70 p-4 z-30">
      <div className="w-2/3 md:w-2/5 max-w-lg bg-white shadow rounded relative">
        <button
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => setShowModal(false)}
        >
          <CancelIcon />
        </button>
        <div className="p-4 border-b border-gray-200">
          Select a design to link
        </div>
        <div className="p-4 grid grid-cols-4 gap-3">
          {collectionData.map((product, index) => (
            <div
              className="w-full flex flex-col gap-1"
              key={index}
              onClick={() => onSelectProduct(product)}
            >
              <div className="h-28 relative">
                <Image
                  src={product.img}
                  alt="Product"
                  fill={true}
                  className="rounded object-cover object-top"
                  sizes="8rem"
                />
              </div>
              <div className="text-sm font-medium">{product.text}</div>
            </div>
          ))}
        </div>
      </div>
    </ContentCenter>
  );
}
