import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieListing from "../MovieListing/MovieListing";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(fetchAsyncMovies());
  }, [dispacth]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
