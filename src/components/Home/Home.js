import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieListing from "../MovieListing/MovieListing";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Home = () => {
  const dispacth = useDispatch();
  const movieText = "avengers";
  const showText = "avengers";

  useEffect(() => {
    dispacth(fetchAsyncMovies(movieText));
    dispacth(fetchAsyncShows(showText));
  }, [dispacth]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
