import { Link } from "react-router-dom";
import styles from "./styles.module.css";
const WalletButton = () => {
  return (
    <Link to="/wallet">
      <div className={styles["wallet-section"]}>
        <button className={styles["wallet-button"]}>Go to your wallet</button>
      </div>
    </Link>
  );
};
export default WalletButton;
