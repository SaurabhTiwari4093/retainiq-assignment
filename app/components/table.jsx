"use client";
import React, { useState } from "react";
import { Product, ProductFilter } from "./product";
import TableCell from "./tableCell";
import { AddButton, RowButton } from "./buttons";
import ContentCenter from "./ContentCenter";
import { MoreIcon } from "../assets/icons";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CollectionModal from "./modal";

const initialHeaders = ["Product Filter", "Primary Variant", "Variant 2"];
const initialData = [
  {
    id: 1,
    variants: [
      {
        img: "/images/1.jpg",
        text: "Anniversary sale",
      },
      {
        img: "/images/2.webp",
        text: "Zero discount",
      },
    ],
  },
  {
    id: 2,
    variants: [
      {
        img: "/images/3.webp",
        text: "Single image",
      },
      {
        img: "/images/4.webp",
        text: "Multi image",
      },
    ],
  },
];

function DraggableRow({
  row,
  index,
  moveRow,
  removeRow,
  addColumn,
  setShowModal,
  onProductClick,
}) {
  const [, dragRef] = useDrag({
    type: "row",
    item: { index },
  });

  const [, dropRef] = useDrop({
    accept: "row",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveRow(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => dragRef(dropRef(node))}
      className="flex my-4 group bg-gray-50 z-10"
    >
      <div className="sticky left-0 flex z-20 bg-gray-50">
        <TableCell width={24}>
          <RowButton num={index + 1} onClick={() => removeRow(row.id)} />
        </TableCell>
        <TableCell width={96}>
          <ProductFilter />
        </TableCell>
      </div>
      {row.variants.map((variant, variantIndex) => (
        <TableCell key={variantIndex}>
          <Product
            variant={variant}
            setShowModal={setShowModal}
            onProductClick={() => onProductClick(index, variantIndex)}
          />
        </TableCell>
      ))}
      <ContentCenter className={"p-4"}>
        <AddButton onClick={addColumn} />
      </ContentCenter>
    </div>
  );
}

export default function Table() {
  const [headers, setHeaders] = useState(initialHeaders);
  const [data, setData] = useState(initialData);
  const [idCounter, setIdCounter] = useState(initialData.length + 1);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({
    row: null,
    column: null,
  });

  // Function to add a new row with default null object structure for variants
  const addRow = () => {
    const newVariants = Array(headers.length - 1).fill({
      img: null,
      text: null,
    });

    setData([
      ...data,
      {
        id: idCounter,
        variants: newVariants,
      },
    ]);

    setIdCounter(idCounter + 1);
  };

  // Function to add a new column (variant) with default null object structure for each row
  const addColumn = () => {
    setHeaders([...headers, `Variant ${headers.length}`]);

    const updatedData = data.map((row) => ({
      ...row,
      variants: [
        ...row.variants,
        {
          img: null,
          text: null,
        },
      ],
    }));

    setData(updatedData);
  };

  const removeRow = (id) => {
    setData(data.filter((row) => row.id !== id));
  };

  const moveRow = (fromIndex, toIndex) => {
    const updatedData = [...data];
    const [movedRow] = updatedData.splice(fromIndex, 1);
    updatedData.splice(toIndex, 0, movedRow);
    setData(updatedData);
  };

  // Function to handle product cell click and open modal
  const handleProductClick = (rowIndex, variantIndex) => {
    setSelectedProduct({ row: rowIndex, column: variantIndex });
    setShowModal(true);
  };

  // Function to update selected product
  const updateProduct = (selectedVariant) => {
    const updatedData = [...data];
    updatedData[selectedProduct.row].variants[selectedProduct.column] =
      selectedVariant;
    setData(updatedData);
    setShowModal(false); // Close modal after product selection
  };

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div className="bg-gray-50 rounded border border-gray-200 mt-4 relative overflow-x-auto">
          <div className="flex my-4 font-medium text-gray-600 z-10">
            <div className="sticky left-0 flex z-20 bg-gray-50">
              <div className="w-24" />
              <TableCell width={96}>
                <div className="text-center">{headers[0]}</div>
              </TableCell>
            </div>
            {headers.slice(1).map((header, index) => (
              <TableCell key={index}>
                <div className="flex justify-between items-center text-nowrap">
                  {header}
                  <MoreIcon />
                </div>
              </TableCell>
            ))}
          </div>

          {data.map((row, index) => (
            <DraggableRow
              key={row.id}
              row={row}
              index={index}
              moveRow={moveRow}
              removeRow={removeRow}
              addColumn={addColumn}
              setShowModal={setShowModal}
              onProductClick={handleProductClick}
            />
          ))}

          <div className="sticky left-0 flex z-10 bg-gray-50">
            <ContentCenter className={"w-24 p-4"}>
              <AddButton onClick={addRow} />
            </ContentCenter>
            <div className="w-96" />
          </div>
        </div>
      </DndProvider>
      {showModal && (
        <CollectionModal
          setShowModal={setShowModal}
          onSelectProduct={updateProduct}
        />
      )}
    </>
  );
}
