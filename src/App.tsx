// src/App.tsx
import React, { useState } from "react";
import Header from "./components/Navbar/Header";
import Footer from "./components/Navbar/Footer";
import Home from "./components/Navbar/Home";
import "./App.css";

const App: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (searchText: string) => {
    setQuery(searchText);
    console.log("Searching for:", searchText);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Home query={query} />
      <Footer />
    </div>
  );
};

export default App;
