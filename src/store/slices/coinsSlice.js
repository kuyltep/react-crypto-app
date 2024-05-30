import { createSlice } from "@reduxjs/toolkit";

export const coinSlice = createSlice({
  name: "coin",
  initialState: {
    coins: [],
    coin: {},
  },
  reducers: {
    setCoins: (state, payload) => {
      state.coins = payload;
    },
    setCoin: (state, payload) => {
      state.coin = payload;
    },
  },
});
export const { setCoin, setCoins } = coinSlice.actions;

export default coinSlice.reducer;
