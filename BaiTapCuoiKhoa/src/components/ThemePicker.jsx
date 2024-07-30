import React, { useEffect, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

const ThemePicker = ({ onThemeChange, themes }) => {
  const themeList = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const [isOpen, setThemePickerState] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  useEffect(()=> {
    if(themeList.current&&isOpen){
        themeList.current.focus()
    }
  },[isOpen])
  const toggleDropdown = () => {
    setIsScrolledToTop(true);
    setIsScrolledToBottom(false);
    setIsScrollable(false)
    setAnimationClass(
      isOpen ? "animate-retract-animation" : "animate-drop-down-animation"
    );
    setTimeout(() => {
      setThemePickerState((prevState) => !prevState);
    }, 150);
  }

  const handleScroll = () => {
    if (themeList.current) {
      const { scrollTop, scrollHeight, clientHeight } = themeList.current;
      setIsScrollable(scrollHeight > clientHeight);
      setIsScrolledToTop(scrollTop === 0);
      setIsScrolledToBottom(scrollTop + clientHeight >= scrollHeight);
    }
  };

  return (
    <div
      data-tooltip-id="Theme"
      data-tooltip-content={"Theme"}
      data-tooltip-place="bottom"
      className={`hover:bg-secondary-2 size-11 rounded-full flex items-center justify-center relative ${
        isOpen ? "bg-secondary-2" : ""
      }`}
    >
      <FontAwesomeIcon
        icon={faCircleHalfStroke}
        size="xl"
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div
          className={`pointer-events-auto absolute top-full p-2 mt-2 right-0 bg-secondary-2 rounded-xl w-40 h-fit ${animationClass} origin-top`}
        >
          <ul
            className={`flex gap-2 flex-wrap ${
              !isScrolledToTop && isScrollable
                ? 'before:left-0 before:top-0 before:rounded-t-xl before:bg-accent before:shadow-xl  before:h-[15px] before:content-[" "] before:w-full before:absolute before:box-border'
                : ""
            }  ${
              !isScrolledToBottom && isScrollable
                ? 'after:left-0 after:rounded-b-xl after:bottom-0 after:bg-accent after:h-[15px] after:content-[" "] after:w-full after:absolute after:box-border'
                : ""
            }  h-48 w-full rounded-lg overflow-y-scroll no-scrollbar`}
            ref={themeList}
            onScroll={handleScroll}
          >
            {themes.map((theme) => (
              <div
                key={theme}
                className="cursor-pointer w-full h-8 grid-cols-4 grid rounded-lg overflow-hidden "
                onClick={() => {
                  onThemeChange(theme);
                }}
              >
                <div className={`w-full h-full ${theme} bg-primary`}></div>
                <div className={`w-full h-full ${theme} bg-secondary-1`}></div>
                <div className={`w-full h-full ${theme} bg-secondary-2`}></div>
                <div className={`w-full h-full ${theme} bg-accent`}></div>
              </div>
            ))}
          </ul>
        </div>
      )}
      {!isOpen && (
        <Tooltip id="Theme" className="tooltip" classNameArrow="hidden" />
      )}
    </div>
  );
};

export default ThemePicker;
