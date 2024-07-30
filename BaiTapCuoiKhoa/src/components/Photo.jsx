import React, { useState } from "react";

const Photo = ({ photo, selected }) => {
  return (
    <div className="animate-slide-up-animation w-full h-fit  relative grid grid-cols-1  gap-2  rounded-xl overflow-hidden cursor-zoom-in " onClick={()=>{selected(photo)}}>
      <div
        className={`flex items-end flex-wrap hover:opacity-100 opacity-0 absolute p-2 bottom-0  left-0 bg-gradient-to-t from-black to-transparent text-white size-full`}
      >
        <div className="h-fit w-full">
          <p className="text-left font-bold text-xl h-fit w-full">{photo.title}</p>
          <ul className="flex overflow-x-scroll no-scrollbar h-fit gap-2 text-lg w-full">
            {photo.categories.map((category) => (
              <li>{category}</li>
            ))}
          </ul>
        </div>
      </div>
      <img className="w-full rounded-lg " src={photo.source} alt={photo.title} />
    </div>
  );
};

export default Photo;
