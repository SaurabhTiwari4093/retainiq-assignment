import React from "react";
import { LeftArrowIcon } from "../assets/icons";

export default function Search() {
  return (
    <div className="flex gap-3 items-center">
      <LeftArrowIcon className={"size-8"} />
      <input
        value={"Test 3_staging"}
        className="outline-none border-b-2 border-gray-700 p-1 text-2xl font-semibold"
      />
      <div className="bg-blue-50 border border-blue-500 rounded-full px-3 py-0.5 text-xs text-blue-500 font-medium">
        Primary Feed
      </div>
    </div>
  );
}
