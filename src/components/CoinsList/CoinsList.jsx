import { useSelector } from "react-redux";
import "./styles.css";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { createRef } from "react";
const CoinsList = () => {
  const { filteredCoins } = useSelector((state) => state.filteredCoins);
  return (
    <TransitionGroup component={"ul"} className="coins-list">
      {filteredCoins.map((coin) => {
        const nodeRef = createRef(coin.uuid);
        return (
          <CSSTransition
            key={coin.uuid}
            classNames="coin-animate"
            nodeRef={nodeRef}
            timeout={1000}
          >
            <Link to={"coins/" + coin.symbol} ref={nodeRef}>
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
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};
export default CoinsList;
