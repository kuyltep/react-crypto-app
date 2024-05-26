import { useContext, useEffect, useMemo, useState } from "react";
import Card from "../../components/Card/Card";
import styles from "./styles.module.css";
import { CoinsContext } from "../../context/coinsContext";
import WalletCoinsList from "../../components/Wallet/WalletCoinsList/WalletCoinsList";
const Wallet = ({ wallet, setWallet, balance, setBalance }) => {
  const { coins } = useContext(CoinsContext);
  const [coinsInWallet, setCoinsInWallet] = useState([]);
  useMemo(() => {
    const coinsInWallet = coins.filter((coin) => {
      return Object.keys(wallet).includes(coin.name);
    });
    setCoinsInWallet(coinsInWallet);
  }, [coins, wallet]);
  return (
    <div className={styles["wallet-page"]}>
      <h2 className={styles["wallet-title"]}>Your wallet</h2>
      <Card balance={balance} name={"Vlad Petlyuk"} setBalance={setBalance} />
      <WalletCoinsList
        wallet={wallet}
        setWallet={setWallet}
        coinsList={coinsInWallet}
        balance={balance}
        setBalance={setBalance}
      />
    </div>
  );
};
export default Wallet;
