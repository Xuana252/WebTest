import React from 'react';

const SearchBar = ({onTextChange}) => {
  return (
    <input className=' bg-white rounded-2xl px-2 shadow-inner-custom focus:outline-none text-2xl  ' placeholder='Search text' type="text" onChange={(e)=>{onTextChange(e.target.value)}}/>
  );
};

export default SearchBar;