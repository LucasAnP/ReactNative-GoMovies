import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/api";

const initialState = {
  movies: [],
  status: "idle",
  error: null,
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  try {
    const response = await api.get("/movies/popular");
    return [...response.data];
  } catch (err) {
    return err.message;
  }
});

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    movieAdded(state, action) {
      state.movies.push(action.payload);
    },
    prepare(title, content, userId) {
      return {
        payload: {
          id: nanoid(),
          title,
          content,
          date: new Date().toISOString(),
          userId,
          reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          },
        },
      };
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
      });
  },
});

export const selectAllMovies = (state) => state.movies.movies;
export const getMoviesStatus = (state) => state.movies.status;
export const getMoviesError = (state) => state.movies.error;

export const { movieAdded } = moviesSlice.actions;

export default moviesSlice.reducer;
