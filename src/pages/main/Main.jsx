import Card from "../../components/Card/Card";
import CoinsList from "../../components/CoinsList/CoinsList";
import FilterBlock from "../../components/FilterBlock/FilterBlock";
import Loading from "../../components/Loading/Loading";
import Toaster from "../../components/toaster/Toaster";
import WalletButton from "../../components/Wallet/WalletButton/WalletButton";
import { useGetCoinsQuery } from "../../service/api";
import styles from "./styles.module.css";

const Main = ({ balance, setBalance, coins, setCoins }) => {
  // const filterExpensiveCoins = () => {
  //   console.log("--func work");
  //   return filteredCoins.filter((coin) => coin.price > 1000);
  // };
  // const expensiveCoins = useMemo(() => filterExpensiveCoins(), [filteredCoins]);
  const { data, isLoading, isError } = useGetCoinsQuery();
  // console.log(data);
  return (
    <main className={styles.main}>
      <Card balance={balance} name={"Vlad Petlyuk"} setBalance={setBalance} />
      <WalletButton />
      <FilterBlock setCoins={setCoins} />
      {isLoading && !isError ? (
        <Loading type={"bubbles"} color={"black"} />
      ) : (
        <CoinsList />
      )}
      {isError ? (
        Toaster(
          {
            title: "Error in load coins",
            text: "Some problems with loading coins, please, try again later",
          },
          {
            position: "top-right",
            autoClose: 5000,
            theme: "colored",
          },
          "error"
        )
      ) : (
        <></>
      )}
    </main>
  );
};
export default Main;
