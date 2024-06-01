import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./pages/main/Main";
import { getCoins } from "./api/api";
import { CoinsContext } from "./context/coinsContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./pages/coin/Coin";
import NotFound from "./pages/not-found/NotFound";
import Wallet from "./pages/wallet/Wallet";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoins } from "./store/slices/coinsSlice";

function App() {
  const [userWallet, setUserWallet] = useState({});
  const [balance, setBalance] = useState(50000);
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const coinsState = useSelector((state) => state.coins.coins);
  useEffect(() => {
    setCoins(coinsState);
    setFilteredCoins(coinsState);
  }, [coinsState]);

  return (
    <>
      <CoinsContext.Provider value={{ coins, filteredCoins }}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  wallet={userWallet}
                  setCoins={setFilteredCoins}
                  coins={coins}
                  filteredCoins={filteredCoins}
                  balance={balance}
                  setBalance={setBalance}
                />
              }
            />
            <Route
              path="coins/:coin"
              element={
                <Coin
                  balance={balance}
                  setBalance={setBalance}
                  setWallet={setUserWallet}
                  wallet={userWallet}
                />
              }
              loader={({ params }) => {
                params.coin;
              }}
            />
            <Route
              path="wallet"
              element={
                <Wallet
                  wallet={userWallet}
                  setWallet={setUserWallet}
                  balance={balance}
                  setBalance={setBalance}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CoinsContext.Provider>
    </>
  );
}

export default App;
