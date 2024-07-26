import React, { useEffect, useState } from "react";
import Photo from "./Photo";

const Gallery = ({ photos }) => {
  const [gridColStyle, setGridColStyle] = useState('grid-colds-1')
  const [colsNum ,setColsNum] = useState(1)
  useEffect(() => {
    // Function to handle resizing
    const handleResize = () => {
      if (window.innerWidth > 1080) {
        setGridColStyle('grid-cols-5');
        setColsNum(5);
      } else if(window.innerWidth > 720) {
        setGridColStyle('grid-cols-4');
        setColsNum(4);
      }else if(window.innerWidth > 480) {
        setGridColStyle('grid-cols-3');
        setColsNum(3);
      }
      else {
        setGridColStyle('grid-cols-1');
        setColsNum(1);
      }
      
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array means this effect runs once, on mount



  return (
    <ul className={`grid ${gridColStyle} gap-x-2 bg-slate-200 min-h-screen min-w-full gap-2 p-5 justify-center absolute top-[100px]`}>
       {[...Array(colsNum).keys()].map((columnIndex) => (
        <div key={columnIndex} className="flex flex-col w-full h-fit gap-2 ">
          {photos.map((photo, index) => {
            if (index % colsNum === columnIndex) {
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
