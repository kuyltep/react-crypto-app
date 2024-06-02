import { useEffect } from "react";
import Card from "../../components/Card/Card";
import CoinsList from "../../components/CoinsList/CoinsList";
import FilterBlock from "../../components/FilterBlock/FilterBlock";
import Loading from "../../components/Loading/Loading";
import Toaster from "../../components/toaster/Toaster";
import WalletButton from "../../components/Wallet/WalletButton/WalletButton";
import { useGetCoinsQuery } from "../../service/api";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredCoins } from "../../store/slices/filteredCoinsSlice";

const Main = () => {
  const dispatch = useDispatch();
  const { isLoading, isError } = useGetCoinsQuery();
  const coinsState = useSelector((state) => state.coins.coins);
  useEffect(() => {
    dispatch(setFilteredCoins(coinsState));
  }, [dispatch, coinsState]);
  return (
    <main className={styles.main}>
      <Card />
      <WalletButton />
      <FilterBlock />
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
