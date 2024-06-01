import { createSlice } from "@reduxjs/toolkit";

const coinSlice = createSlice({
  name: "coin",
  initialState: {
    coins: [],
    coin: {},
  },
  reducers: {
    setCoins: (state, action) => {
      state.coins = action.payload;
    },
    setCoin: (state, action) => {
      state.coin = action.payload;
    },
  },
});
export const { setCoin, setCoins } = coinSlice.actions;

export default coinSlice.reducer;
