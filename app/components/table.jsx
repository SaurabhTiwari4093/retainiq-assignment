"use client";
import React, { useState } from "react";
import { Product, ProductFilter } from "./product";
import TableCell from "./tableCell";
import { AddButton, RowButton } from "./buttons";
import ContentCenter from "./ContentCenter";
import { MoreIcon } from "../assets/icons";

const initialHeaders = ["Product Filter", "Primary Variant", "Variant 2"];
const initialData = [
  {
    id: 1,
    filter: "Product Collection contains Anarkali Kurtas",
    variants: [1, 2],
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
      <div className="flex my-4 font-medium text-gray-600">
        <div className="w-24" />
        <TableCell width={96}>
          <div className="text-center">{headers[0]}</div>
        </TableCell>
        {headers.slice(1).map((header, index) => (
          <TableCell key={index}>
            <div className="flex justify-between items-center text-nowrap">
              {header}
              <MoreIcon />
            </div>
          </TableCell>
        ))}
      </div>

      {/* Data Rows */}
      {data.map((row) => (
        <div key={row.id} className="flex my-4">
          <TableCell width={24}>
            <RowButton id={row.id} />
          </TableCell>
          <TableCell width={96}>
            <ProductFilter />
          </TableCell>
          {row.variants.map((variant, index) => (
            <TableCell key={index}>
              <Product />
            </TableCell>
          ))}
          {/* Button to Add Column */}
          <ContentCenter className={"p-4"}>
            <AddButton onClick={addColumn} />
          </ContentCenter>
        </div>
      ))}

      {/* Button to Add Row */}
      <ContentCenter className={"w-24 p-4"}>
        <AddButton onClick={addRow} />
      </ContentCenter>
    </div>
  );
}
