import React from "react";
import { Container } from "react-bootstrap";
import Recommendation from "../misc/Recommendation";
import "./List.css";

const Anime = () => {
  const id = 258;
  return (
    <>
    <Container className="cont-list">
      <h1 className="tittle-list">Finished</h1>
      <Recommendation title="Recommended" url={`/${id}/pictures`} />
    </Container>
    </>
  );
};

export default Anime;
