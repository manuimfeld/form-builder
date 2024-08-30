"use client";
import { useRef, useState } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOrigin({ x: e.clientX - translate.x, y: e.clientY - translate.y });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setTranslate({
        x: e.clientX - origin.x,
        y: e.clientY - origin.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const scaleAmount = -e.deltaY * 0.001;
    setScale((prevScale) => Math.max(0.5, prevScale + scaleAmount));
  };

  return (
    <div
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        cursor: isDragging ? "grabbing" : "grab",
        background: "#f0f0f0",
        position: "relative",
      }}
    >
      <div
        style={{
          transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
          transformOrigin: "0 0",
          width: "200%",
          height: "200%",
          background: "white",
        }}
      >
        {/* Aquí puedes agregar los elementos que quieras dentro del canvas */}
        <h1 style={{ padding: "20px" }}>Este es tu canvas</h1>
      </div>
    </div>
  );
};

export default Canvas;
