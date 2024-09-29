import React from "react";

export default function ContentCenter({ className, children }) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      {children}
    </div>
  );
}
