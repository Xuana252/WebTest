import React, { useState } from "react";

const Photo = ({ source, title, categories }) => {
  return (
    <div className="animate-slide-up-animation w-full h-fit  grid grid-cols-1  gap-2  rounded-xl overflow-hidden ">
      <a
        href={source}
        target="_blank"
        className="relative rounded-lg "
      >
        <div
          className={`flex items-end flex-wrap hover:opacity-100 opacity-0 absolute p-2 bottom-0  left-0 bg-gradient-to-t from-black to-transparent text-white size-full`}
        >
          <div className="h-fit w-full">
            <p className="text-left font-bold text-xl h-fit w-full">{title}</p>
            <ul className="flex overflow-x-scroll no-scrollbar h-fit gap-2 text-lg w-full">
              {categories.map((category) => (
                <li>{category}</li>
              ))}
            </ul>
          </div>
        </div>
        <img className="w-full rounded-lg " src={source} alt={title} />
      </a>
    </div>
  );
};

export default Photo;
