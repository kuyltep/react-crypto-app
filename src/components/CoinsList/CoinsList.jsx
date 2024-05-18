import { useContext } from "react";
import "./styles.css";
import { CoinsContext } from "../../context/coinsContext";
import { Link } from "react-router-dom";
const CoinsList = () => {
  const coinsContext = useContext(CoinsContext);
  const { filteredCoins } = coinsContext;
  return (
    <ul className="coins-list">
      {filteredCoins.map((coin) => {
        return (
          <Link key={coin.uuid} to={"coins/" + coin.symbol}>
            <li className="coin-item">
              <div className="coin-item__info">
                <img
                  className="coin-item__logo"
                  src={coin.iconUrl}
                  alt={coin.name}
                />
                <p style={{ color: coin.color }}>{coin.name}/USD</p>
              </div>
              <div className="coin-item__price">
                <p style={{ color: coin.color }}>
                  {(+coin.price).toFixed(4)} USD
                </p>
                <p style={{ color: coin.color }}>
                  {(+coin.btcPrice).toFixed(4)} BTC
                </p>
              </div>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};
export default CoinsList;
