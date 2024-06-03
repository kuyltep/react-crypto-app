import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import {
  addCoinInWallet,
  saleCoinFromWallet,
} from "../../../store/slices/walletSlice";
//ConorMcgregor  я полность консослидирую свое состояние но я больше не могу раотать один ребяат пожалуста проявите хоть какуюто активность
const WalletCoinsList = () => {
  const disptach = useDispatch();
  const { wallet } = useSelector((state) => state.wallet);
  const walletKeys = Object.keys(wallet);
  return (
    <ul className={styles["coins-list"]}>
      {walletKeys.map((name, index) => {
        const coinItem = wallet[name];
        return coinItem.counter > 0 ? (
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
              <p className={styles["coin-count"]}>Count: {coinItem.counter}</p>
              <p className={styles["coin-price"]}>
                Price: {(+coinItem.price).toFixed(2)}$
              </p>
              <p className={styles["coin-price"]}>
                Total Price: {(+coinItem.price * +coinItem.counter).toFixed(2)}$
              </p>
            </div>
            <div className={styles["buttons-section"]}>
              <button
                className={styles["button-buy"]}
                onClick={(e) => {
                  e.stopPropagation();
                  disptach(addCoinInWallet(coinItem));
                }}
              >
                BUY
              </button>
              <button
                className={styles["button-sale"]}
                onClick={(e) => {
                  e.stopPropagation();
                  disptach(saleCoinFromWallet(coinItem));
                }}
              >
                SALE
              </button>
            </div>
          </li>
        ) : null;
      })}
    </ul>
  );
};
export default WalletCoinsList;
