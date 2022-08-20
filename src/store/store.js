import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "../store/ducks/moviesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
