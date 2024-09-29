import React from "react";
import { PublishButton } from "./buttons";
import Search from "./search";

export default function Header() {
  return (
    <div className="flex justify-between items-center w-full border-b border-gray-200 pb-4">
      <Search />
      <PublishButton />
    </div>
  );
}
