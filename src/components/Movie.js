import React from "react";

const Movie = ({
  titleOriginal,
  description,
  image,
  year,
  rating,
  release,
}) => {
  return (
    <div className="movie">
      <div className="movie-header">
        <img src={image} alt={titleOriginal} />
      </div>
      <div className="movie-info">
        <p title={titleOriginal}>{titleOriginal}</p>
        <span className="rating">{rating}</span>
      </div>
    </div>
  );
};

export default Movie;
