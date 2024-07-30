import React, { useRef, useState } from "react";
import SearchBar from "./SearchBar";
import CategoriesBox from "./CategoriesBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCommentDots,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { isMobile } from "react-device-detect";
import { Tooltip } from "react-tooltip";
import ThemePicker from "./ThemePicker";

const Menu = ({
  categories,
  onCateStateChange,
  onSearching,
  onThemeChange,
  themes,
}) => {
  const [isSearching, setSearchState] = useState(false);

  const handleFakeButtonClick = () => {
    alert("This does not do anything.");
  };
  const handleInputFusing = (state) => {
    setSearchState(state);
  };


  return (
    <div className="pointer-events-none bg-secondary-1  text-accent grid grid-rows-2 h-menu w-full fixed left-0 top-0 shadow-md transition ease-in-out duration-300">
      <div className="justify-between pointer-events-auto h-full w-full gap-5 px-2 items-center flex">
        <div
          data-tooltip-id="App Logo"
          data-tooltip-content={"App Logo"}
          data-tooltip-place="bottom"
          className={`${
            isSearching && isMobile ? "hidden" : "flex"
          } justify-start size-fit items-center hover:bg-secondary-2  cursor-pointer select-none rounded-xl p-2 gap-2`}
          onClick={handleFakeButtonClick}
        >
          <div className="font-AppLogo text-3xl">AppLogo</div>
          <div
            className={`${
              isMobile ? "hidden" : "block"
            } w-full text-title font-title leading-title  `}
          >
            Le Gallerie
          </div>
        </div>
        <Tooltip id="App Logo" className="tooltip" classNameArrow="hidden" />

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
          <ThemePicker onThemeChange={onThemeChange} themes={themes}/>
          <button
            data-tooltip-id="Notification"
            data-tooltip-content={"Nitification"}
            data-tooltip-place="bottom"
            className="hover:bg-secondary-2 rounded-full size-11"
            onClick={handleFakeButtonClick}
          >
            <FontAwesomeIcon icon={faBell} size="xl" />
          </button>
          <Tooltip
            id="Notification"
            className="tooltip"
            classNameArrow="hidden"
          />

          <button
            data-tooltip-id="Message"
            data-tooltip-content={"Message"}
            data-tooltip-place="bottom"
            className="hover:bg-secondary-2 rounded-full size-11"
            onClick={handleFakeButtonClick}
          >
            <FontAwesomeIcon icon={faCommentDots} size="xl" />
          </button>
          <Tooltip id="Message" className="tooltip" classNameArrow="hidden" />

          <button
            data-tooltip-id="Profile"
            data-tooltip-content={"Profile"}
            data-tooltip-place="bottom-end"
            className="hover:bg-secondary-2 rounded-full size-11"
            onClick={handleFakeButtonClick}
          >
            <FontAwesomeIcon icon={faUser} size="xl" />
          </button>
          <Tooltip id="Profile" className="tooltip" classNameArrow="hidden" />
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
