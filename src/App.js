import React, { useEffect, useState } from "react";
import Movie from "./components/Admin/Movie";

import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
const MOVIE_API = "https://movies-app1.p.rapidapi.com/api/movies";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2434b58409msh0181e45f4ad1cc8p15b8e1jsn0344a3020698",
    "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
  },
};
const App = () => {
  // const [movies, setMovies] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);

  // const getMovies = () => {
  //   fetch(MOVIE_API, options)
  //     .then((res) => res.json())
  //     .then(
  //       (data) => {
  //         console.log(data.results);
  //         setIsLoaded(true);
  //         setMovies(data.results);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // };
  // useEffect(() => {
  //   getMovies();
  // }, []);

  // const filterMovie = (e) => {
  //   e.preventDefault();
  //   if (searchTerm) {
  //     const filteredMovies = movies.filter((movie) =>
  //       movie.titleOriginal.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     setMovies(filteredMovies);
  //   } else {
  //     setMovies(movies);
  //   }
  // };

  return (
    <div className="main-bg vh-100 d-flex align-items-center justify-content-center flex-column">
      <Login />
      {/* <Signup /> */}
    </div>
    // <div className="container">
    //   <header className="header">
    //     <div className="logo"><span class="logo-txt">M</span>ovie<span class="logo-txt">M</span>ania</div>
    //     <form onSubmit={filterMovie}>
    //       <input
    //         type="text"
    //         placeholder="Enter movie name..."
    //         value={searchTerm}
    //         onChange={(e) => setSearchTerm(e.target.value)}
    //       />
    //     </form>
    //   </header>
    //   <div className="movie-container">
    //     {error
    //       ? <div className="error"><span>Error : </span>{error.message}</div>
    //       : !isLoaded
    //       ? <div className="loading">Loading ...</div>
    //       : movies.map((movie) => <Movie key={movie._id} {...movie} />)
    //     }
    //   </div>
    // </div>
  );
};

export default App;
