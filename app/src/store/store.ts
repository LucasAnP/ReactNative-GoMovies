import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./ducks/moviesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
