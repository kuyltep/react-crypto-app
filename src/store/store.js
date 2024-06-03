import { configureStore } from "@reduxjs/toolkit";
import { api } from "../service/api";
import filteredCoinsSlice from "./slices/filteredCoinsSlice";
import coinsSlice from "./slices/coinsSlice";
import walletSlice from "./slices/walletSlice";
import { createLogger } from "redux-logger";
const logger = createLogger({
  collapsed: true,
});
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    coins: coinsSlice,
    filteredCoins: filteredCoinsSlice,
    wallet: walletSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(logger),
});
