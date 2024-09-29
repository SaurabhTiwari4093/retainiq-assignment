import React from "react";

export default function ItemContainer({ width = 52, border = true, children }) {
  return (
    <div className={`w-${width} ${border && `border-r`} border-gray-200 p-4`}>
      {children}
    </div>
  );
}
