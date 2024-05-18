import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import styles from "./styles.module.css";
import React, { useContext, useMemo, useState } from "react";
import CoinInfo from "../../components/CoinInfo/CoinInfo";
import CoinPriceList from "../../components/CoinPriceList/CoinPriceList";
import { CoinsContext } from "../../context/coinsContext";

const Coin = ({ balance, setBalance, setWallet }) => {
  const { coins } = useContext(CoinsContext);
  const [coinInfo, setCoinInfo] = useState({});
  const params = useParams();
  useMemo(() => {
    const coinInfo = coins.find((coin) => {
      return coin.symbol === params.coin;
    });
    setCoinInfo(coinInfo);
  }, [coins]);
  console.log(coinInfo);
  return (
    <div className={styles["coin-page"]}>
      <Card name="Vlad Petlyuk" balance={balance} setBalance={setBalance} />
      <CoinInfo
        imageUrl={coinInfo.iconUrl}
        name={coinInfo.name}
        price={coinInfo.price}
        rank={coinInfo.rank}
        setBalance={setBalance}
        balance={balance}
        setWallet={setWallet}
      />
      <CoinPriceList priceList={coinInfo.sparkline} />
    </div>
  );
};
export default React.memo(Coin);
