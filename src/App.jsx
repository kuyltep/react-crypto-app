import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./pages/main/Main";
import { getCoins } from "./api/api";
function App() {
  const [balance, setBalance] = useState(50000);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const coinsData = await getCoins();
      setCoins(coinsData.coins);
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <Main coins={coins} balance={balance} setBalance={setBalance} />
    </>
  );
}

export default App;
