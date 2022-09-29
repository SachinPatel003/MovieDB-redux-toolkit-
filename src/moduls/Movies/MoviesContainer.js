import Movies from "./Movies";
import React from "react";
import { useGetMovieQuery } from "../../store/API/Movie";

const MoviesContainer = () => {
  const { data, isLoading, error, isFetching, isSuccess } = useGetMovieQuery();
 console.log("aaa" , data)
  return (
    <>
      {isLoading && <h1>Loading..</h1>}
      {isFetching && <h1>Fetching..</h1>}
      {error && <h1>Error..</h1>}
      {isSuccess && <Movies data={data.results} />}
    </>
  );
};

export default MoviesContainer;
