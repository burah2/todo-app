// src/components/SearchBar.js
import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';

const SearchBar = () => {
  const { dispatch } = useContext(TaskContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
