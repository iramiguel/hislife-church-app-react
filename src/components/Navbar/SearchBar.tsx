import React, { useState } from "react";
import { Search } from "lucide-react";
import "./SearchBar.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    onSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar-form">
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search..."
          value={input}
          onChange={handleChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          <Search size={20} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
