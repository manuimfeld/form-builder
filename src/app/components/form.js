"use client";
import { useState } from "react";

const generateKey = () => {
  return `${new Date().getTime()}-${Math.random()
    .toString(36)
    .substring(2, 9)}`;
};

export const Form = () => {
  const [items, setItems] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const elementType = event.dataTransfer.getData("elementType");

    // Aquí puedes manejar la creación del elemento en la interfaz
    console.log("Elemento soltado:", elementType);

    // Lógica para agregar el elemento a tu área de diseño/formulario
    setItems((prevItems) => [
      ...prevItems,
      { type: elementType, key: generateKey() },
    ]);
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Permite que el drop funcione
  };

  const handleRemove = (key) => {
    setItems((prevItems) => prevItems.filter((item) => item.key !== key));
  };

  // Renderiza el elemento correcto basado en el tipo, con opción de eliminación
  const renderElement = (item) => {
    const { type, key } = item;
    switch (type) {
      case "Input":
        return (
          <div key={key} className="relative mb-3">
            <input
              className="p-2 w-fit bg-[#2B2B31] text-white rounded"
              placeholder="Input field"
            />
            <button
              className="absolute top-0 right-0 p-1 text-red-500"
              onClick={() => handleRemove(key)}
            >
              ✕
            </button>
          </div>
        );
      case "Text":
        return (
          <div key={key} className="relative mb-3">
            <textarea
              className="p-2 w-fit bg-[#2B2B31] text-white rounded"
              placeholder="Text area"
            />
            <button
              className="absolute top-0 right-0 p-1 text-red-500"
              onClick={() => handleRemove(key)}
            >
              ✕
            </button>
          </div>
        );
      case "Button":
        return (
          <div key={key} className="relative mb-3">
            <button className="p-2 w-fit bg-[#00ADD2] text-white rounded">
              Button
            </button>
            <button
              className="absolute top-0 right-0 p-1 text-red-500"
              onClick={() => handleRemove(key)}
            >
              ✕
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form
      className="flex flex-col text-white bg-red-200 w-fit"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <p>Form</p>
      {items.map((item) => renderElement(item))}
    </form>
  );
};
