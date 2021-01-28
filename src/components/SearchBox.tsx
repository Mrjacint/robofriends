import React from "react";

interface ISearchBoxProps {
    searchChange(event: React.ChangeEvent<HTMLInputElement>): void
}

const SearchBox: React.FunctionComponent<ISearchBoxProps> = ({ searchChange }) => {
  return (
    <div className="pa2">
      <label>
        <input
          aria-label="search robots"
          className="pa3 ba b--green bg-lightest-blue"
          type="search"
          placeholder="search robots"
          onChange={searchChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;
