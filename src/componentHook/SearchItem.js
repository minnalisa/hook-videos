import React, { useState } from 'react';

const SearchItem = ({ onceSubmit }) => {
  const [searchInput, setSearchInput] = useState('');

  const onSubmitForm = (e) => {
    e.preventDefault();
    onceSubmit(searchInput);
  };

  return (
    <div className="search-bar ui inverted segment">
      <div className="ui inverted form">
        <form className="ui form" onSubmit={onSubmitForm}>
          <div className="field">
            <label>Search Video</label>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchItem;
