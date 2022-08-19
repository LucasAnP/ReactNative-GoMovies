import axios from "axios";

const api = axios.create({
  baseURL: "https://api.trakt.tv",
  headers: {
    "Content-Type": "application/json",
    "trakt-api-key":
      "7079a2f6e62a7873d3c229eba7216a1ec0edf830e1fba2d1e1ab1f12d08cefd0",
    "trakt-api-version": 2,
  },
});

export { api };
