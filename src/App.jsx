import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./pages/main/Main";
import { getCoins } from "./api/api";
import { CoinsContext } from "./context/coinsContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./pages/coin/Coin";
import NotFound from "./pages/not-found/NotFound";
function App() {
  const [userWallet, setUserWallet] = useState({});
  const [balance, setBalance] = useState(50000);
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const coinsData = await getCoins();
      setCoins(coinsData.coins);
      setFilteredCoins(coinsData.coins);
    };
    fetchData();
  }, []);
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
            <Route />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CoinsContext.Provider>
    </>
  );
}

export default App;
