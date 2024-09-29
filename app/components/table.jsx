import React from "react";
import Item from "./Item";
import ItemContainer from "./itemContainer";

const headers = ["Product Filter", "Primary Variant", "Variant 2", "Variant 3"];

const data = [
  {
    id: 1,
    filter: "Product Collection contains Anarkali Kurtas",
    variants: [1, 2, 3],
  },
  {
    id: 2,
    filter: "Product Collection contains Anarkali Kurtas",
    variants: [1, 2, 3, 4],
  },
];

export default function Table() {
  return (
    <div className="bg-gray-100 rounded border border-gray-200 mt-4 p-4">
      <div className="flex my-4">
        <ItemContainer width={24} />
        <ItemContainer width={96}>{headers[0]}</ItemContainer>
        {headers.slice(1).map((header, index) => (
          <ItemContainer key={index}>{header}</ItemContainer>
        ))}
      </div>

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
        </div>
      ))}
    </div>
  );
}
