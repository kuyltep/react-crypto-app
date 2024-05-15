import Card from "../../components/Card/Card";
import CoinsList from "../../components/CoinsList/CoinsList";
import FilterBlock from "../../components/FilterBlock/FilterBlock";
import Loading from "../../components/Loading/Loading";
import styles from "./styles.module.css";

const Main = ({ balance, setBalance, coins, filteredCoins, setCoins }) => {
  return (
    <main className={styles.main}>
      <Card balance={balance} name={"Vlad Petlyuk"} setBalance={setBalance} />
      <FilterBlock setCoins={setCoins} coins={coins} />
      {coins.length > 0 ? (
        <CoinsList coins={filteredCoins} />
      ) : (
        <Loading type={"bubbles"} color={"black"} />
      )}
    </main>
  );
};
export default Main;
