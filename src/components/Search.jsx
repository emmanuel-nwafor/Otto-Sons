import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState(""); // State to store the search input

  // Handle input change and trigger search function from parent
  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); // Pass the query to the parent component
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="search-input"
        placeholder="Search vehicles..."
      />
    </div>
  );
};

export default Search;
