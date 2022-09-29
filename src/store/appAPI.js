import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Internal
import { BASE_URL } from "../config/index";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

export const movieDBApi = createApi({
  reducerPath: "movieDBApi",
  baseQuery: baseQuery,
  tagTypes: ["Movie", "TVshow"],
  endpoints: () => ({}),
});
