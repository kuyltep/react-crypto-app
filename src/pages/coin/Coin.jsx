import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import styles from "./styles.module.css";
import CoinInfo from "../../components/CoinInfo/CoinInfo";
import CoinPriceList from "../../components/CoinPriceList/CoinPriceList";
import { useGetCoinByUuidQuery } from "../../service/api";
import Loading from "../../components/Loading/Loading";
import Toaster from "../../components/toaster/Toaster";
const Coin = () => {
  const params = useParams();
  const { isLoading, isError } = useGetCoinByUuidQuery({ id: params.coin });
  return (
    <div className={styles["coin-page"]}>
      <Card />
      {isLoading && !isError ? (
        <Loading type={"bubbles"} color={"black"} />
      ) : isError ? (
        Toaster(
          {
            title: "Error in load coin info",
          },
          {
            position: "top-right",
            autoClose: 5000,
            theme: "colored",
          },
          "error"
        )
      ) : (
        <>
          <CoinInfo />
        </>
      )}

      {/* <CoinPriceList /> */}
    </div>
  );
};
export default Coin;
