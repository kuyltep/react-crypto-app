import { configureStore } from "@reduxjs/toolkit";
import { api } from "../service/api";
import { coinSlice } from "./slices/coinsSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    coin: coinSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
