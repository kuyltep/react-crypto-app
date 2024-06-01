import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    wallet: {},
    balance: 50000,
  },
  reducers: {
    setBalance: (state, action) => {
      state.balance += action.payload;
    },
    addCoinInWallet: (state, action) => {
      if (state.balance >= +action.payload.price) {
        if (state.wallet[action.payload.name]?.counter) {
          state.wallet[action.payload.name].counter += 1;
        } else {
          state.wallet[action.payload.name] = action.payload;
        }
        state.balance -= +action.payload.price;
      }
    },
    saleCoinFromWallet: (state, action) => {
      if (state.wallet[action.payload.name]?.counter > 0) {
        state.balance += action.payload.price;
      }
      state.wallet[action.payload.name].counter -= 1;
    },
  },
});
export const { setBalance, addCoinInWallet, saleCoinFromWallet } =
  walletSlice.actions;
export default walletSlice.reducer;
