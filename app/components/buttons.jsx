import React from "react";
import { AddIcon, MoveIcon, RemoveIcon } from "../assets/icons";
import ContentCenter from "./contentCenter";

export function AddButton({ onClick }) {
  return (
    <button
      className="bg-white text-gray-700 hover:text-gray-900 shadow rounded w-10 h-10 flex items-center justify-center"
      onClick={onClick}
    >
      <AddIcon />
    </button>
  );
}

export function AddVariant({ onClick }) {
  return (
    <button
      className="border border-gray-200 shadow rounded py-1 px-2 flex text-sm items-center"
      onClick={onClick}
    >
      <AddIcon /> <span>Add design</span>
    </button>
  );
}

export function RowButton({ num, onClick }) {
  return (
    <ContentCenter className={"h-full relative"}>
      <button
        onClick={onClick}
        className={"hidden group-hover:block text-red-500 absolute top-12"}
      >
        <RemoveIcon />
      </button>
      <div className="flex items-center gap-2">
        <span className="text-3xl font-bold text-gray-700">{num}</span>
        <button className="text-gray-700 hover:text-gray-900 mt-0.5 cursor-grab">
          <MoveIcon />
        </button>
      </div>
    </ContentCenter>
  );
}

export function PublishButton() {
  return (
    <button className="bg-green-600 text-white py-2 px-4 rounded shadow">
      Publish Feed
    </button>
  );
}
