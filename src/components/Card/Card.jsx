// import { WithRuBalance } from "../../helpers/hoc/WithRuBalance";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { setBalance } from "../../store/slices/walletSlice";
const Card = () =>
  // { balance, name, setBalance, ruBalance }
  {
    const dispatch = useDispatch();
    const { name, balance } = useSelector((state) => state.wallet);
    return (
      <div className={styles.card}>
        <div className={styles["card-block"]}>
          <p>CRYPTO FINANCE</p>
          <button
            onClick={() => dispatch(setBalance(1000))}
            className={styles["card-button"]}
          >
            Add money
          </button>
        </div>
        <div className={styles["card-block"]}>
          <p>{name}</p>
          <p>{balance.toFixed(2)}$</p>
        </div>
      </div>
    );
  };
export default Card;
