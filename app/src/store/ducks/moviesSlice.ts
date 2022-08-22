import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "axios";
import { api, imageApi } from "../../services/api";

const initialState = {
  movies: [],
  recommendedMovies: [],
  status: "idle",
  error: null,
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  try {
    const response = await api.get("/movies/trending");
    const estructuredMovies = [];
    for (const { movie } of response.data) {
      const { data } = await imageApi.get(`/${movie.ids.tmdb}`);
      const newMovie = {
        title: data.title,
        info: data.tagline,
        image: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
        date: data.release_date.slice(0, 4),
        detailedInfo: data.overview,
      };
      estructuredMovies.push(newMovie);
    }
    return [...estructuredMovies];
  } catch (err) {
    return err.message;
  }
});

export const fetchRecommendedMovies = createAsyncThunk(
  "movies/fetchRecommendedMovies",
  async () => {
    try {
      const response = await api.get("/movies/watched/yearly");
      const estructuredMovies = [];
      for (const { movie } of response.data) {
        const { data } = await imageApi.get(`/${movie.ids.tmdb}`);
        const newMovie = {
          title: data.title,
          info: data.tagline,
          image: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
          date: data.release_date.slice(0, 4),
          detailedInfo: data.overview,
        };
        estructuredMovies.push(newMovie);
      }
      return [...estructuredMovies];
    } catch (err) {
      return err.message;
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    movieAdded(state, action) {
      state.movies.push(action.payload);
    },
    movieRecommendedAdded(state, action) {
      state.recommendedMovies.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(fetchRecommendedMovies.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchRecommendedMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.recommendedMovies = action.payload;
      });
  },
});

export const selectAllMovies = (state) => state.movies.movies;
export const getMoviesStatus = (state) => state.movies.status;
export const getMoviesError = (state) => state.movies.error;

export const selectAllRecommendedMovies = (state) =>
  state.movies.recommendedMovies;

export const { movieAdded, movieRecommendedAdded } = moviesSlice.actions;

export default moviesSlice.reducer;
