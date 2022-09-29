import { configureStore } from "@reduxjs/toolkit";
import CommonReducer from "./API/CommonReducer";
import { movieDBApi } from "./appAPI";

const store = configureStore({
  reducer: {
    common: CommonReducer,
    [movieDBApi.reducerPath]: movieDBApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieDBApi.middleware),
});

export default store;
