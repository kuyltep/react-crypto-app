import Card from "../../components/Card/Card";
import CoinsList from "../../components/CoinsList/CoinsList";
import FilterBlock from "../../components/FilterBlock/FilterBlock";
import Loading from "../../components/Loading/Loading";
import WalletButton from "../../components/Wallet/WalletButton/WalletButton";
import styles from "./styles.module.css";

const Main = ({ balance, setBalance, coins, setCoins }) => {
  // const filterExpensiveCoins = () => {
  //   console.log("--func work");
  //   return filteredCoins.filter((coin) => coin.price > 1000);
  // };
  // const expensiveCoins = useMemo(() => filterExpensiveCoins(), [filteredCoins]);
  return (
    <main className={styles.main}>
      <Card balance={balance} name={"Vlad Petlyuk"} setBalance={setBalance} />
      <WalletButton />
      <FilterBlock setCoins={setCoins} />
      {coins.length > 0 ? (
        <CoinsList />
      ) : (
        <Loading type={"bubbles"} color={"black"} />
      )}
    </main>
  );
};
export default Main;
