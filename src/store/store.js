import { configureStore } from "@reduxjs/toolkit";
import { api } from "../service/api";
import filteredCoinsSlice from "./slices/filteredCoinsSlice";
import coinsSlice from "./slices/coinsSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    coins: coinsSlice,
    filteredCoins: filteredCoinsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
