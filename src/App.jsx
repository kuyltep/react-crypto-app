import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./pages/main/Main";
import { getCoins } from "./api/api";
function App() {
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
      <Header />
      <Main
        setCoins={setFilteredCoins}
        coins={coins}
        filteredCoins={filteredCoins}
        balance={balance}
        setBalance={setBalance}
      />
    </>
  );
}

export default App;
