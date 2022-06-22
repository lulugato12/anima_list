import axios from "../constants/axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import "./Poster.css";

function Recommendation(props) {
  const [show, setShow] = useState([]);
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      const aux = [...response.data.data];
      const images = aux.map((a) => {
        return a.jpg.image_url;
      });
      setShow([...images]);
    });
  }, []);

  return (
    <div className="row">
      <h2 className="head">{props.title}</h2>
      <div className="posters">
        {!show ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          show.map((one) => {
            return (
              <img
                className={props.isSmall ? "smallposter" : "poster"}
                src={one}
                alt="poster"
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Recommendation;
