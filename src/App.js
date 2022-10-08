import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";

const MOVIE_API = "https://movies-app1.p.rapidapi.com/api/movies";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2434b58409msh0181e45f4ad1cc8p15b8e1jsn0344a3020698",
    "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
  },
};
const App = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(MOVIE_API, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="movie-container">
      {movies.length && movies.map((movie) => (
        <Movie key={movie._id} {...movie} />
      ))}
    </div>
  );
};

export default App;
