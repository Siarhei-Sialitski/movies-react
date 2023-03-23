import { useState } from "react";
import "./App.css";
import Counter from "./components/counter";
import GenreSelect from "./components/genreSelect";
import Search from "./components/search";
import React from 'react';

function App() {
  const [selectedGenre, setSelectedGenre] = useState("All");

  return (
    <div className="App">
      <Counter initialValue={10} />
      <Search initialValue="" onSearch={(s) => console.log(s)} />
      <GenreSelect
        genreNames={["All", "Documentary", "Comedy", "Horror", "Crime"]}
        selectedGenre={selectedGenre}
        onSelect={(g) => {
          console.log(g);
          setSelectedGenre(g);
        }}
      />
    </div>
  );
}

export default App;
