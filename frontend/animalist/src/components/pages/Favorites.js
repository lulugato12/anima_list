import Poster from "../misc/Poster";
import React from "react";
import Recommendation from "../misc/Recommendation";

const Anime = () => {
  const id = 5;
  return (
    <>
      <Recommendation title="My favorites" url={`/${id}/pictures`} />
    </>
  );
};

export default Anime;
