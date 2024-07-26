import React from "react";

const CategoriesBox = ({ categories, onCateStateChange }) => {
  return (
    <ul className="pointer-events-auto flex justify-center bg-white w-full h-catebox gap-2 flex-wrap overflow-auto">
      {categories.map((category) => (
        <div
          className={`min-w-minCate my-2 text-center rounded-full py-1 px-3 text-cate font-bold select-none transition ease-in-out duration-300 ${
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
