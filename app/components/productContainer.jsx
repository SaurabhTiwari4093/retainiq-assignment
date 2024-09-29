import React from "react";

export default function ProductContainer({ width = 52, children }) {
  return (
    <div className={`w-${width} border-r border-gray-200 p-4`}>{children}</div>
  );
}
