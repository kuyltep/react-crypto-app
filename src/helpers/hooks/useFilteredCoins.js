import { useEffect, useState } from "react";
const useFilteredCoins = (coins, setCoins) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    const filteredCoins = coins.filter((coin) =>
      coin.name.toLowerCase().includes(value.toLowerCase())
    );
    setCoins(filteredCoins);
  }, [value]);
  return { value, setValue };
};
export default useFilteredCoins;
