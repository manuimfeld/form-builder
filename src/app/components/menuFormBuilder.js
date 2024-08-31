"use client";

export const MenuFormBuilder = () => {
  const handleDragStart = (event, elementType) => {
    event.dataTransfer.setData("elementType", elementType);
  };

  return (
    <div className="custom-scrollbar overflow-y-scroll z-10 p-6 text-white rounded-lg shadow-2xl fixed left-5 top-[10%] bg-[#1E1E24] w-3/12 h-4/5 flex flex-col justify-between border border-[#3A3A40]">
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-[#FFFFFF]">
          Form Elements
        </h2>
        <ul className="space-y-4">
          <li
            onDragStart={(event) => handleDragStart(event, "Input")}
            draggable
            className="cursor-pointer flex items-center space-x-3 p-3 bg-[#2B2B31] hover:bg-[#3E3E45] rounded transition shadow-md"
          >
            <span className="text-lg">Input</span>
          </li>
          <li
            onDragStart={(event) => handleDragStart(event, "Text")}
            draggable
            className="cursor-pointer flex items-center space-x-3 p-3 bg-[#2B2B31] hover:bg-[#3E3E45] rounded transition shadow-md"
          >
            <span className="text-lg">Text</span>
          </li>
          <li
            onDragStart={(event) => handleDragStart(event, "Button")}
            draggable
            className="cursor-pointer flex items-center space-x-3 p-3 bg-[#2B2B31] hover:bg-[#3E3E45] rounded transition shadow-md"
          >
            <span className="text-lg">Button</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
