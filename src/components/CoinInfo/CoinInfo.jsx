import { useState } from "react";
import styles from "./styles.module.css";
import Toaster from "../toaster/Toaster";
const CoinInfo = ({
  rank,
  imageUrl,
  price,
  name,
  setBalance,
  balance,
  setWallet,
  wallet,
}) => {
  function buyCoin() {
    console.log("BUY");
    if ((+price).toFixed(2) <= balance) {
      console.log("MORE BUY");
      wallet[name] ? (wallet[name] += 1) : (wallet[name] = 1);
      setWallet(wallet);
      setBalance((prev) => prev - (+price).toFixed(2));
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
  }
  return (
    <>
      <div className={styles["coin-info"]}>
        <div className={styles["img-section"]}>
          <img className={styles["coin-img"]} src={imageUrl} alt="" />
        </div>
        <div className={styles["info-section"]}>
          <p className={styles["info-text"]}>Crypto rank: {rank}</p>
          <p className={styles["info-text"]}>Crypto name: {name}</p>
          <p className={styles["info-text"]}>
            Crypto price: {(+price).toFixed(2)}$
          </p>
        </div>
      </div>
      <div>
        <button onClick={buyCoin} className={styles["info-btn"]}>
          Buy {name}
        </button>
      </div>
    </>
  );
};

export default CoinInfo;
