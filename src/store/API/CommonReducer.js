import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  // isLoading: false,
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setMovie(state, action) {
      state.movies = action.payload;
    },

    // setStatus(state, action) {
    //   state.isLoading = action.payload;
    // },
  },
});

export const { setMovie } = commonSlice.actions;
export default commonSlice.reducer;

