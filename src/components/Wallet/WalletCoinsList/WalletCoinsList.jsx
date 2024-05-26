import Toaster from "../../toaster/Toaster";
import styles from "./styles.module.css";
//ConorMcgregor  я полность консослидирую свое состояние но я больше не могу раотать один ребяат пожалуста проявите хоть какуюто активность
const WalletCoinsList = ({
  wallet,
  setWallet,
  coinsList,
  balance,
  setBalance,
}) => {
  const buyCoin = (coinItem) => {
    if (balance >= +coinItem.price) {
      setBalance((prev) => prev - +coinItem.price);
      wallet[coinItem.name]
        ? (wallet[coinItem.name] += 1)
        : (wallet[coinItem.name] = 1);
      setWallet(wallet);
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
    }
  };
  const saleCoin = (coinItem) => {
    if (wallet[coinItem.name] > 0) {
      setBalance((prev) => prev + +coinItem.price);
      wallet[coinItem.name] -= 1;
      setWallet(wallet);
      Toaster(
        {
          title: "Success sale!",
          text: "Excellent, now you have minus one coin in your wallet",
        },
        {
          position: "top-right",
          autoClose: 5000,
          theme: "colored",
        },
        "info"
      );
    }
  };
  return (
    <ul className={styles["coins-list"]}>
      {coinsList.map((coinItem, index) => {
        return wallet[coinItem.name] ? (
          <li className={styles["coin-item"]} key={index}>
            <div className={styles["coin-section"]}>
              <img
                src={coinItem.iconUrl}
                alt=""
                className={styles["coin-img"]}
              />
              <p className={styles["coin-name"]}>{coinItem.symbol}</p>
            </div>
            <div className={styles["price-section"]}>
              <p className={styles["coin-count"]}>
                Count: {wallet[coinItem.name]}
              </p>
              <p className={styles["coin-price"]}>
                Price: {(+coinItem.price).toFixed(2)}$
              </p>
              <p className={styles["coin-price"]}>
                Total Price:{" "}
                {(+coinItem.price * +wallet[coinItem.name]).toFixed(2)}$
              </p>
            </div>
            <div className={styles["buttons-section"]}>
              <button
                className={styles["button-buy"]}
                onClick={(e) => {
                  e.stopPropagation();
                  buyCoin(coinItem);
                }}
              >
                BUY
              </button>
              <button
                className={styles["button-sale"]}
                onClick={(e) => {
                  e.stopPropagation();
                  saleCoin(coinItem);
                }}
              >
                SALE
              </button>
            </div>
          </li>
        ) : (
          <></>
        );
      })}
    </ul>
  );
};
export default WalletCoinsList;
