import React, { useRef, useState } from "react";

const CategoriesBox = ({ categories, onCateStateChange }) => {
  const listRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startClientX, setStartClientX] = useState(0);

  const handleMouseDown = (e) => {
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

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  return (
    <ul className="pointer-events-auto align-middle bg-white flex px-2 justify-start md:justify-center w-full h-full gap-2 overflow-x-scroll   no-scrollbar align-middle" onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} ref={listRef} onMouseUp={handleMouseUp} >
      {categories.map((category) => (
        <div
          className={`h-fit w-fit my-2 text-center rounded-full py-1 px-3 text-cate font-bold select-none transition ease-in-out duration-300 ${
            !category.state
              ? "bg-white border-2 border-black text-black"
              : "bg-black border-2 border-black text-white"
          }`}
          onClick={()=>onCateStateChange(category.id)}
        >
          {category.name}
        </div>
      ))}
    </ul>
  );
};

export default CategoriesBox;
