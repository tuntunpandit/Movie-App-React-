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
        <p>{titleOriginal}</p>
        <span>{rating}</span>
      </div>

    </div>
  );
};

export default Movie;
