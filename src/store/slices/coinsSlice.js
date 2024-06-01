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
    coinPrices: [],
  },
  reducers: {
    setCoins: (state, action) => {
      state.coins = action.payload;
    },
    setCoin: (state, action) => {
      state.coin = action.payload;
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
        state.coins = action.payload;
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
export const { setCoin, setCoins } = coinSlice.actions;

export default coinSlice.reducer;
