import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between items-center w-full border-b border-gray-200 pb-4">
      <div>Search</div>
      <button className="bg-green-600 text-white py-2 px-4 rounded shadow">
        Publish Feed
      </button>
    </div>
  );
}
