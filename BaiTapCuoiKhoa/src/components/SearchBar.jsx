import React from 'react';

const SearchBar = ({onTextChange}) => {
  return (
    <input className=' bg-white h-fit rounded-2xl px-2 shadow-inner-custom focus:outline-none text-xl w-[50%] placeholder:italic placeholder:text-xs' placeholder='Search photo title...' type="text" onChange={(e)=>{onTextChange(e.target.value)}}/>
  );
};

export default SearchBar;