import React from "react";
import { AddIcon } from "../assets/icons";

export function AddButton({ onClick }) {
  return (
    <button
      className="bg-white shadow rounded w-10 h-10 flex items-center justify-center"
      onClick={onClick}
    >
      <AddIcon />
    </button>
  );
}

export function RemoveButton() {
  return <button></button>;
}
