import React, { useState } from "react";
import SearchBar from "./SearchBar";
import CategoriesBox from "./CategoriesBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCommentDots,
  faUser,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { isMobile } from "react-device-detect";
import Logo1 from "../assets/AppPhotos/Logo1.png";

const Menu = ({
  categories,
  onCateStateChange,
  onSearching,
  onThemeChange,
  themes
}) => {
  const [isSearching, setSearchState] = useState(false);
  const [isOpen, setThemePickerState] = useState(false) 
  const toggleDropdown = () => {
    setThemePickerState(prevState=> !prevState)
  }
  const handleFakeButtonClick = () => {
    alert("This does not do anything.");
  };
  const handleInputFusing = (state) => {
    setSearchState(state);
  };
  return (
    <div className="pointer-events-none  bg-primary text-accent grid grid-rows-2 h-menu w-full fixed left-0 top-0 shadow-lg transition ease-in-out duration-300">
      <div className="justify-between pointer-events-auto h-full w-full gap-5 px-2 items-center flex">
        <div
          className={`${
            isSearching && isMobile ? "hidden" : "flex"
          } justify-start size-fit items-center hover:bg-secondary-1 rounded-xl p-2 gap-2`}
          onClick={handleFakeButtonClick}
        >
          <div className="font-AppLogo text-3xl">AppLogo</div>
          <div
            className={`${
              isMobile ? "hidden" : "block"
            } w-full text-title font-title leading-title  cursor-pointer select-none `}
          >
            Le Gallerie
          </div>
        </div>

        <SearchBar
          onTextChange={onSearching}
          onFocus={handleInputFusing}
          isSearching={isSearching}
        />
        <div
          className={`${
            isSearching && isMobile ? "hidden" : "flex"
          } h-full w-fit justify-end items-center`}
        >
          <div
            className={`hover:bg-secondary-1 size-11 rounded-full flex items-center justify-center relative ${isOpen?'bg-secondary-1':''}`}
          >
            <FontAwesomeIcon icon={faCircleHalfStroke} size="xl" onClick={toggleDropdown} />
           {isOpen && <div className="absolute top-full p-2 mt-2 right-0 bg-secondary-1 rounded-xl w-40 h-fit">
              <ul className="flex gap-2 flex-wrap h-48 w-full overflow-y-scroll no-scrollbar">
                {themes.map(theme => (
                  <div key={theme} className="cursor-pointer w-full h-8 grid-cols-4 grid rounded-lg overflow-hidden " onClick={()=>{onThemeChange(theme)}}>
                    <div className={`w-full h-full ${theme} bg-primary`}></div>
                    <div className={`w-full h-full ${theme} bg-secondary-1`}></div>
                    <div className={`w-full h-full ${theme} bg-secondary-2`}></div>
                    <div className={`w-full h-full ${theme} bg-accent`}></div>
                  </div>
                ))}
              </ul>
            </div>}
          </div>
          <button
            className="hover:bg-secondary-1 rounded-full size-11"
            onClick={handleFakeButtonClick}
          >
            <FontAwesomeIcon icon={faBell} size="xl" />
          </button>
          <button
            className="hover:bg-secondary-1 rounded-full size-11"
            onClick={handleFakeButtonClick}
          >
            <FontAwesomeIcon icon={faCommentDots} size="xl" />
          </button>
          <button
            className="hover:bg-secondary-1 rounded-full size-11"
            onClick={handleFakeButtonClick}
          >
            <FontAwesomeIcon icon={faUser} size="xl" />
          </button>
        </div>
      </div>

      <CategoriesBox
        categories={categories}
        onCateStateChange={onCateStateChange}
      />
    </div>
  );
};

export default Menu;
