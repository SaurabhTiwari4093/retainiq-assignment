import React from "react";
import { AddIcon, MoveIcon } from "../assets/icons";
import ContentCenter from "./ContentCenter";

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

export function RowButton({ id }) {
  return (
    <ContentCenter className={"h-full"}>
      <div className="flex items-center gap-2">
        <span className="text-3xl font-bold text-gray-700">{id}</span>
        <button className="text-gray-700 hover:text-gray-900 mt-0.5 cursor-move">
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
