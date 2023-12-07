import React, { useState } from "react";

const SearchComponent = ({ searchList, onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    // Perform the search logic
    const filteredData = searchList.filter((item) =>
      item.name.toLowerCase().includes(newSearchTerm.toLowerCase())
    );

    // Pass the filtered list back to the parent component
    onSearchChange(filteredData, searchTerm);
  };

  return (
    <div style={{ textAlign: "left", margin: "2rem" }}>
      <label
        htmlFor="search"
        style={{
          fontWeight: "bold",
        }}
      >
        Search:{" "}
      </label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchComponent;
