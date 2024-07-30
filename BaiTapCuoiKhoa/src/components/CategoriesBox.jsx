import { faL } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState } from "react";

const CategoriesBox = ({ categories, onCateStateChange }) => {
  const listRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startClientX, setStartClientX] = useState(0);
  const [mouseDownCoordX, setMouseDownCoordX] = useState(0);
  const [mouseUpCoordX, setMouseUpCoordX] = useState(0);

  const handleMouseDown = (e) => {
    setMouseDownCoordX(e.clientX)
    setIsDragging(true);
    setStartClientX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const scrollAmount = startClientX - e.clientX;
      listRef.current.scrollLeft += scrollAmount;
      setStartClientX(e.clientX);
    }
  };

  const handleMouseUp = (e) => {
    setMouseUpCoordX(e.clientX)
    setIsDragging(false);
  };
  const handleMouseLeave = (e) => {
    if (isDragging) {
      setIsDragging(false);
    }
  }
  const onCateSelect = (categoryId) => {
    if(mouseUpCoordX===mouseDownCoordX)
      onCateStateChange(categoryId)
  }
  return (
    <ul
      className="pointer-events-auto align-middle bg-background flex px-2 justify-start md:justify-center w-full h-full gap-2 overflow-x-scroll no-scrollbar"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      ref={listRef}
    >
      {categories.map((category) => (
        <div
          className={`h-fit w-fit my-2 text-center rounded-full py-1 px-3 text-cate font-bold select-none transition ease-in-out duration-300 ${
            !category.state
              ? "bg-secondary-1 border-2 border-accent text-accent"
              : "bg-accent border-2 border-accent text-primary"
          }`}
          onClick={() =>  onCateSelect(category.id)}
        >
          {category.name}
        </div>
      ))}
    </ul>
  );
};

export default CategoriesBox;
