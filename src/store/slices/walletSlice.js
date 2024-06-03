import { createSlice } from "@reduxjs/toolkit";
import Toaster from "../../components/toaster/Toaster";
const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    wallet: {},
    balance: 50000,
    name: "Vlad Petlyuk",
  },
  reducers: {
    setBalance: (state, action) => {
      state.balance += action.payload;
    },
    addCoinInWallet: (state, action) => {
      if (state.balance >= +action.payload.price) {
        if (state.wallet[action.payload.name]) {
          state.wallet[action.payload.name].counter += 1;
          console.log("add counter");
        } else {
          console.log("new coin");
          state.wallet[action.payload.name] = { ...action.payload, counter: 1 };
        }
        state.balance -= +action.payload.price;
        Toaster(
          {
            title: "Success buy!",
            text: "Excellent, now you have plus one coin in your wallet",
          },
          {
            position: "top-right",
            autoClose: 5000,
            theme: "colored",
          },
          "success"
        );
      } else {
        Toaster(
          {
            title: "Error buy!",
            text: "You don't have money to buy this coin",
          },
          {
            position: "top-right",
            autoClose: 5000,
            theme: "colored",
          },
          "error"
        );
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
