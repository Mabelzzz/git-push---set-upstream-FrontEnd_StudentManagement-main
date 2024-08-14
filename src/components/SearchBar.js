import React, { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search students..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} className="btn btn-primary mt-2">Search</button>
    </div>
  );
}

export default SearchBar;
