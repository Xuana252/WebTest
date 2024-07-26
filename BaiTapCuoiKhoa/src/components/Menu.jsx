import React from "react";
import SearchBar from "./SearchBar";
import CategoriesBox from "./CategoriesBox";

const Menu = ({ categories, onCateStateChange, onSearching }) => {
  return (
    <div className="pointer-events-none grid grid-rows-AppBar h-full w-full fixed left-0 top-0 ">
      <div className="pointer-events-auto h-full gap-5 bg-white px-4 items-center justify-center flex">
        <h1 className="p-2 size-fit text-title font-title leading-title text-nowrap	">
          Le Gallerie
        </h1>
        <SearchBar onTextChange={onSearching} />
      </div>
      <CategoriesBox
        categories={categories}
        onCateStateChange={onCateStateChange}
      />
      <div className="size-full  bg-transparent border-white border-4 shadow-inner-custom">
        {" "}
      </div>
    </div>
  );
};

export default Menu;
