"use client";
import React, { useState } from 'react';
import styles from '/Users/preyasmistry/Downloads/movie-booking-project/mbp/styles/Searchbar.module.css'; 

interface SearchbarProps {
  onSearch?: (query: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
    setQuery(''); 
  };

  return (
    <>
      <form onSubmit={handleSearchSubmit} className="flex items-center justify-center w-full">
        <input
          type="search"
          value={query}
          onChange={handleSearchChange}
          placeholder="Search for movies, events, etc."
          className={`px-4 py-2 rounded-xl bg-stone-800 text-natural-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-regal-blue-400 w-1/2 ${styles.searchInput}`} // Use the CSS module here
        />
      </form>
    </>
  );
};

export default Searchbar;