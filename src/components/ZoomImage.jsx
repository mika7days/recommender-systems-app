import React, { useState } from "react";

const ZoomImage = ({ src, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-zoom-in w-auto transition-transform duration-300 ease-in-out ${
          isZoomed
            ? "fixed top-0 left-0 w-full h-full object-contain z-50 cursor-zoom-out"
            : "h-auto"
        }`}
        onClick={handleZoom}
      />
      {isZoomed && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black z-40"
            onClick={handleZoom}
          />
          <button
            className="fixed top-4 right-4 text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded z-50"
            onClick={handleZoom}
          >
            Close
          </button>
        </>
      )}
    </>
  );
};

export default ZoomImage;
