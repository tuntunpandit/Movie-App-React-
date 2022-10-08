import React from "react";

const Movie = ({
  titleOriginal,
  description,
  image,
  rating,
}) => {
  return (
    <div className="movie">
      <div className="movie-header">
        <img src={image} alt={titleOriginal} />
      </div>
      <div className="movie-info">
        <h5 title={titleOriginal}>{titleOriginal}</h5>
        <span className="rating">{rating}</span>
      </div>
      <div className="movie-overlay">
        <h4>Overview :</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Movie;
