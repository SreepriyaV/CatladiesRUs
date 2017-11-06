import React from 'react';

const SearchBar = (props) => {

  const handleChange = props.handleChange;
  const inputValue = props.inputValue;

  return (
    <form>
      <input
        onChange={handleChange}
        value={inputValue}
        placeholder="Enter Cat's Name"
      />
    </form>
  )
}

export default SearchBar;
