import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api, useGetCoinsQuery } from "../../service/api";
export const fetchCoins = createAsyncThunk("coins/fetchCoins", () => {
  const { data } = useGetCoinsQuery();
  console.log(data);
  return data;
});

const coinSlice = createSlice({
  name: "coins",
  initialState: {
    coins: [],
    coin: {},
    coinSymbol: "",
    coinPrices: [],
  },
  reducers: {
    setCoins: (state, action) => {
      state.coins = action.payload;
    },
    findAndSetCoin: (state, action) => {
      const coin = state.coins.find((coin) => {
        return coin.symbol === action.payload;
      });
      state.coin = coin;
    },
    setCoinSymbol: (state, action) => {
      state.coinSymbol = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getCoins.matchFulfilled,
      (state, action) => {
        state.coins = action.payload;
      }
    );
    builder.addMatcher(
      api.endpoints.getCoinByUuid.matchFulfilled,
      (state, action) => {
        state.coin = action.payload;
      }
    );
    builder.addMatcher(
      api.endpoints.getCoinPriceByUuid.matchFulfilled,
      (state, action) => {
        state.coinPrices = action.payload;
      }
    );
  },
});
export const { findAndSetCoin, setCoins, setCoinSymbol } = coinSlice.actions;

export default coinSlice.reducer;
