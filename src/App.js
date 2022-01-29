import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import AlbumFilter from "./components/AlbumFilter";
import AuthorFilter from "./components/TermFilter";
import SearchContext from "./contexts/SearchContext";

function App() {
  const [author, setAuthor] = useState("");
  const [albums, setAlbums] = useState([]);
  const resetAuthor = () => {
    setAuthor("")
    setAlbums([])
  }
  return (
    <Container fluid>
      <SearchContext.Provider
        value={{
          author,
          setAuthor,
          albums,
          setAlbums,
          resetAuthor
        }}
        >
      <AuthorFilter/>
      <AlbumFilter/>
    </SearchContext.Provider>
  </Container >
  );
}

export default App;
