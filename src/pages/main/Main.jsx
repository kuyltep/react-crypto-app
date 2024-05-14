import Card from "../../components/Card/Card";
import CoinsList from "../../components/CoinsList/CoinsList";
import styles from "./styles.module.css";

const Main = ({ balance, setBalance, coins }) => {
  return (
    <main className={styles.main}>
      <Card balance={balance} name={"Vlad Petlyuk"} setBalance={setBalance} />
      <CoinsList coins={coins} />
    </main>
  );
};
export default Main;
