import React, { useEffect } from "react";

import { Container } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllMovies,
  getMoviesStatus,
  getMoviesError,
  fetchMovies,
} from "./moviesSlice";
import { Text } from "react-native";

export function MoviesList() {
  const dispatch = useDispatch();

  const movies = useSelector(selectAllMovies);
  const moviesStatus = useSelector(getMoviesStatus);
  const error = useSelector(getMoviesError);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  let content;
  if (moviesStatus === "loading") {
    content = <Text>Loading...</Text>;
  } else if (moviesStatus === "succeeded") {
    console.log(movies);
  } else if (moviesStatus === "failed") {
    content = <Text>{error}</Text>;
  }

  return (
    <Container>
      <Text>Movies</Text>
      {content}
    </Container>
  );
}
