import Card from "../../components/Card/Card";
import styles from "./styles.module.css";
import WalletCoinsList from "../../components/Wallet/WalletCoinsList/WalletCoinsList";
const Wallet = () => {
  return (
    <div className={styles["wallet-page"]}>
      <h2 className={styles["wallet-title"]}>Your wallet</h2>
      <Card />
      <WalletCoinsList />
    </div>
  );
};
export default Wallet;
