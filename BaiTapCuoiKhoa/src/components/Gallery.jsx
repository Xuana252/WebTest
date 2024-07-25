import React from "react";
import Photo from "./Photo";

const Gallery = ({ photos }) => {
  let count = 0;
  return (
    <ul className="grid grid-cols-5 gap-x-2 bg-white min-h-full h-fit w-full rounded-2xl shadow-inner-custom gap-2 p-5 justify-center">
       {[0, 1, 2, 3, 4].map((columnIndex) => (
        <div key={columnIndex} className="flex flex-col w-full gap-2 h-auto">
          {photos.map((photo, index) => {
            if (index % 5 === columnIndex) {
              return (
                <Photo
                  key={photo.id}
                  source={photo.source}
                  title={photo.title}
                  categories={photo.categories}
                />
              );
            }
            return null;
          })}
        </div>
      ))}
    </ul>
  );
};

export default Gallery;
