import React, { useState } from 'react';
import axios from 'axios';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSearch: (results: any[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://rebrickable.com/api/v3/lego/sets/?search=${query}&key=REBRICKABLE_API_KEY`);
      onSearch(response.data.results);
      setQuery('');
    } catch (error) {
      console.error("Error fetching LEGO sets:", error);
    }
  };

  return (
    <form onSubmit={handleSearch} className={styles.searchForm}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for LEGO sets"
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>Search</button>
    </form>
  );
};

export default SearchBar;





