import React from "react";

export default function TableCell({ width = 52, children }) {
  return (
    <div
      className={`w-${width} border-r border-gray-200 p-4`}
      style={{ minWidth: `${width / 4}rem` }}
    >
      {children}
    </div>
  );
}
