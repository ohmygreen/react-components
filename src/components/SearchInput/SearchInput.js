import React, { useState, useEffect } from 'react';

import { StyledSearchInput } from './SearchInput.styled';

const SearchInput = ({ searchValue = '', onChange }) => {
  const [inputValue, setInputValue] = useState(searchValue);

  useEffect(() => {
    if (onChange) {
      onChange(inputValue);
    }
  }, [inputValue, onChange]);

  const handleOnChange = ({ target: { value } }) => {
    console.log('TEST3' + value);
    setInputValue(value);
  };

  return (
    <StyledSearchInput>
      <div className="search-holder">
        <input type="text" value={inputValue} onChange={handleOnChange} />
      </div>
    </StyledSearchInput>
  );
};

export default SearchInput;
