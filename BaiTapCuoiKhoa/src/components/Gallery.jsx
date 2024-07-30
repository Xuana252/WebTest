import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import Photo from "./Photo";
import InspectingWindow from "./InspectingWindow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";

const Gallery = ({ photos }) => {
  const [selectedPhoto, setPhoto] = useState(null);
  // const [gridColStyle, setGridColStyle] = useState("grid-colds-1");
  // const [colsNum, setColsNum] = useState(1);
  // useEffect(() => {
  //   // Function to handle resizing
  //   const handleResize = () => {
  //     if (window.innerWidth > 1600) {
  //       setGridColStyle("grid-cols-5");
  //       setColsNum(5);
  //     } else if (window.innerWidth > 1280) {
  //       setGridColStyle("grid-cols-4");
  //       setColsNum(4);
  //     } else if (window.innerWidth > 720) {
  //       setGridColStyle("grid-cols-3");
  //       setColsNum(3);
  //     } else if (window.innerWidth > 480) {
  //       setGridColStyle("grid-cols-2");
  //       setColsNum(2);
  //     } else {
  //       setGridColStyle("grid-cols-1");
  //       setColsNum(1);
  //     }
  //   };

  //   // Initial check
  //   handleResize();

  //   // Add event listener
  //   window.addEventListener("resize", handleResize);

  //   // Cleanup event listener
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []); // Empty dependency array means this effect runs once, on mount

  const breakpointColumnsObj = {
    default: 5,
    1100: 3,
    700: 2,
    500: 1,
  };
  const handleSelected = (photo) => {
    window.scrollTo(0, 0);
    setPhoto(photo);
  };

  return (
    <div className="relative top-[110px] w-full bg-primary transition ease-in-out duration-300 p-4 flex flex-col gap-4">
      {selectedPhoto !== null && (
        <div className="text-accent">
          <button
            className="hidden sm:block hover:bg-secondary-2 rounded-full size-11 absolute"
            onClick={() => setPhoto(null)}
          >
            <FontAwesomeIcon icon={faArrowLeft} size="xl" />
          </button>
          <InspectingWindow photo={selectedPhoto} />
        </div>
      )}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid w-full  "
        columnClassName="my-masonry-grid_column"
      >
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo} selected={handleSelected} />
        ))}
      </Masonry>
    </div>
    // layout masonry tự code
    // <ul className={`grid ${gridColStyle} gap-x-3 bg-primary min-h-screen min-w-full p-5 justify-center absolute top-[110px] transition ease-in-out duration-300 `}>
    //    {[...Array(colsNum).keys()].map((columnIndex) => (
    //     <div key={columnIndex} className="flex flex-col w-full h-fit gap-3 ">
    //       {photos.map((photo, index) => {
    //         if (index % colsNum === columnIndex) {
    //           return (
    //             <Photo
    //               key={photo.id}
    //               source={photo.source}
    //               title={photo.title}
    //               categories={photo.categories}
    //             />
    //           );
    //         }
    //         return null;
    //       })}
    //     </div>
    //   ))}
    // </ul>
  );
};

export default Gallery;
