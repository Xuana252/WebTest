import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onTextChange, onFocus,isSearching }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearching && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearching]);
  return (
    <div
      className={`bg-secondary-1 flex py-1 px-1 text-accent  gap-x-2 h-fit grow shadow-inner-custom rounded-full items-center justify-start transition ease-in-out duration-300`}
      onClick={() => onFocus(true)}
    >
      <div className="flex items-center justify-center h-7 w-7" >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="sm"
          
        />
      </div>

      <input
        ref={inputRef}
        className={`${
          isSearching ? "block" : "hidden"
        } sm:block bg-transparent rent h-fit placeholder:text-accent  focus:outline-none w-full text-xl placeholder:italic placeholder:select-none placeholder:text-base`}
        placeholder="Search photo title..."
        type="text"
        spellCheck='false'
        onFocus={() =>{
          onFocus(true);
        }}
        onBlur={() => {
          onFocus(false);
        }}
        onChange={(e) => {
          onTextChange(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
