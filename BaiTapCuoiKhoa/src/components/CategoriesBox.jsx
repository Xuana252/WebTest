import React from "react";

const CategoriesBox = ({ categories, onCateStateChange }) => {
  return (
    <ul className="flex justify-center bg-white h-catebox w-catebox rounded-full gap-2">
      {categories.map((category) => (
        <div
          className={`min-w-minCate text-center rounded-full py-1 px-3 text-cate font-bold select-none transition ease-in-out duration-300 ${
            !category.state
              ? "bg-white border-4 border-black text-black"
              : "bg-black border-4 border-black text-white"
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
