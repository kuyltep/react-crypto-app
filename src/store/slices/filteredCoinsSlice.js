import { createSlice } from "@reduxjs/toolkit";

const filteredCoinsSlice = createSlice({
  name: "filteredCoins",
  initialState: {
    filteredCoins: [],
  },
  reducers: {
    setFilteredCoins: (state, action) => {
      state.filteredCoins = action.payload;
    },
    filterCoinsByName: (state) => {
      const filteredCoins = state.filteredCoins
        .filter((coin) => coin.name)
        .sort((coin1, coin2) => coin1.name.localCompare(coin2.name));
      state.filteredCoins = filteredCoins;
    },
    filterCoinsByPriceUp: (state) => {
      const filteredCoins = state.filteredCoins
        .filter((coin) => coin.name)
        .sort((coin1, coin2) => coin1.price - coin2.price);
      state.filteredCoins = filteredCoins;
    },
    filterCoinsByPriceDown: (state) => {
      const filteredCoins = state.filteredCoins
        .filter((coin) => coin.name)
        .sort((coin1, coin2) => coin2.price - coin1.price);
      state.filteredCoins = filteredCoins;
    },
    filterCoinsByRaiting: (state) => {
      const filteredCoins = state.filteredCoins
        .filter((coin) => coin.name)
        .sort((coin1, coin2) => coin1.raiting - coin2.raiting);
      state.filteredCoins = filteredCoins;
    },
  },
});
export const {
  setFilteredCoins,
  filterCoinsByName,
  filterCoinsByPriceDown,
  filterCoinsByPriceUp,
  filterCoinsByRaiting,
} = filteredCoinsSlice.actions;

export default filteredCoinsSlice.reducer;
