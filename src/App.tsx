// src/App.tsx
import React, { useState } from "react";
import Header from "./components/HisLife/Header";
import Footer from "./components/HisLife/Footer";
import Home from "./components/HisLife/Home";
import FadeInSection from "./components/HisLife/FadeInSection";
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

      {/* <div style={{ height: "60vh" }}></div> */}
      {/* 
      <FadeInSection>
        <div
          style={{
            background: "#f0f8ff",
            padding: "2rem",
            margin: "2rem auto",
            maxWidth: "600px",
            borderRadius: "1rem",
            textAlign: "center",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Hello! 👋</h2>
          <p>
            I’m a panel that fades in when you scroll to me and stays visible.
          </p>
        </div>
      </FadeInSection> */}

      <Footer />
    </div>
  );
};

export default App;
