"use client";
import React, { useState } from "react";
import Item from "./Item";
import ItemContainer from "./itemContainer";
import { AddButton } from "./addRemoveButton";

const initialHeaders = ["Product Filter", "Primary Variant", "Variant 2"];
const initialData = [
  {
    id: 1,
    filter: "Product Collection contains Anarkali Kurtas",
    variants: [1, 2], // Just representing the number of variants, but these could be replaced with real data
  },
  {
    id: 2,
    filter: "Product Collection contains Anarkali Kurtas",
    variants: [1, 2],
  },
];

export default function Table() {
  const [headers, setHeaders] = useState(initialHeaders);
  const [data, setData] = useState(initialData);

  // Function to add a new row
  const addRow = () => {
    const newId = data.length + 1;
    setData([
      ...data,
      {
        id: newId,
        filter: `Product Collection contains Anarkali Kurtas`,
        variants: Array(headers.length - 1).fill(1),
      },
    ]);
  };

  // Function to add a new column
  const addColumn = () => {
    setHeaders([...headers, `Variant ${headers.length}`]);

    const updatedData = data.map((row) => ({
      ...row,
      variants: [...row.variants, 1],
    }));

    setData(updatedData);
  };

  return (
    <div className="bg-gray-100 rounded border border-gray-200 mt-4 p-4">
      {/* Header Row */}
      <div className="flex my-4">
        <ItemContainer width={24} />
        <ItemContainer width={96}>{headers[0]}</ItemContainer>
        {headers.slice(1).map((header, index) => (
          <ItemContainer key={index}>{header}</ItemContainer>
        ))}
      </div>

      {/* Data Rows */}
      {data.map((row) => (
        <div key={row.id} className="flex my-4">
          <ItemContainer width={24}>{row.id}</ItemContainer>
          <ItemContainer width={96}>
            <Item />
          </ItemContainer>
          {row.variants.map((variant, index) => (
            <ItemContainer key={index}>
              <Item />
            </ItemContainer>
          ))}
          {/* Button to Add Column */}
          <ItemContainer border={false}>
            <AddButton onClick={addColumn} />
          </ItemContainer>
        </div>
      ))}

      {/* Button to Add Row */}
      <div className="flex my-4">
        <ItemContainer width={24} border={false}>
          <AddButton onClick={addRow} />
        </ItemContainer>
      </div>
    </div>
  );
}
