import { movieDBApi } from "../appAPI";

export const tvshow = movieDBApi.injectEndpoints({
  endpoints: (builder) => ({
    //GET
    gettvshow: builder.query({
      query: () => {
        return {
          url: "/3/trending/all/week?api_key=dd5685fc0c5640abc7ed586478a6ab70",
          method: "GET",
        };
      },
      providesTags: ["TVshow"],
    }),
  }),
  overrideExisting: false,
});

export const { useGettvshowQuery } = tvshow;
