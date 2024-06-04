import { addCoinInWallet } from "../../store/slices/walletSlice";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
const CoinInfo = () => {
  const { coin } = useSelector((state) => state.coins);
  const { rank, iconUrl, name, price } = coin;
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles["coin-info"]}>
        <div className={styles["img-section"]}>
          <img className={styles["coin-img"]} src={iconUrl} alt="" />
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
        <button
          onClick={() => dispatch(addCoinInWallet(coin))}
          className={styles["info-btn"]}
        >
          Buy {name}
        </button>
      </div>
    </>
  );
};

export default CoinInfo;
