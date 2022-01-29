import React, { useContext, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import SearchContext from "../contexts/SearchContext";

const AlbumFilter = () => {
    const {
        author,
        albums,
        setAlbums
    } = useContext(SearchContext);
    const url = `https://itunes.apple.com/search?term=${author}&entity=album`;
    const itunesApi = async (url) => {
      const getData = await fetch(url);
      const finalData = await getData.json();
      return finalData;
    };
    useEffect(() =>{
      itunesApi(url)
       .then(data => {
          const finalData = data.results
            .filter((album, i, albums) => albums.indexOf(album) === i)
            .map(type => ({
              "thumbnail": type.artworkUrl60,
              "title": type.collectionName
               }));
          setAlbums(finalData);
        });
    }, [author])
    return (
        <Col>
          {
            (albums.length !== 0)
            ? albums
               .map(album => (
                 <Row className="d-flex mx-5 my-2" key={album.thumbnail}>
                   <Col className="d-flex justify-content-center">
                       <img src={album.thumbnail}
                        alt="album thumbnail" />
                   </Col>
                   <Col>{album.title}</Col>
                 </Row>))
             : <Col className="mt-5 text-center">
               No se han encontrado coincidencias.
               </Col>
          }
        </Col>
    )
}

export default AlbumFilter;
