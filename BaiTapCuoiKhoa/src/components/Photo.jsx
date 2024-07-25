import React from "react";

const Photo = ({ source, title, categories }) => {
  return (
    <div className="animate-slide-up-animation w-full h-fit bg-white  grid grid-cols-1 shadow-md p-2 gap-2 hover:shadow-2xl  rounded-xl">
      <a href={source} target="_blank" className=' relative bg-gray-400'>
        <img
          className="w-full rounded-lg hover:opacity-50 "
          src={source}
          alt={title}
        />
        <div className="flex rounded-lg size-full justify-center items-center leading-hoverPhoto opacity-0 absolute text-white left-0 top-0 text-6xl hover:opacity-100 hover:bg-hoverPhoto">Open</div>
      </a>

      <p className="text-left font-bold text-xl">{title}</p>
      <ul className="flex flex-wrap gap-2 text-lg">
        {categories.map((category) => (
          <li>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Photo;
