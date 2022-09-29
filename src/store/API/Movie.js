import { movieDBApi } from "../appAPI";

export const movies = movieDBApi.injectEndpoints({
  endpoints: (builder) => ({
    //GET
    getMovie: builder.query({
      query: () => {
        return {
          url: "/3/trending/movie/week?api_key=dd5685fc0c5640abc7ed586478a6ab70",
          method: "GET",
        };
      },
      providesTags: ["Movie"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetMovieQuery } = movies;
