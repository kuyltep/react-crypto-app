import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredCoins } from "../../store/slices/filteredCoinsSlice";
const useFilteredCoins = () => {
  const filteredCoinsDispatch = useDispatch();
  const { coins } = useSelector((state) => state.coins);
  const [value, setValue] = useState("");
  useEffect(() => {
    const filteredCoins = coins.filter((coin) =>
      coin.name.toLowerCase().includes(value.toLowerCase())
    );
    filteredCoinsDispatch(setFilteredCoins(filteredCoins));
  }, [value]);
  return { value, setValue };
};
export default useFilteredCoins;
