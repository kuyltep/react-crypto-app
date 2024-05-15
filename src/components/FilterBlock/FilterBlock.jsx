import { useEffect, useState } from "react";
import "./styles.css";

const FilterBlock = ({ coins, setCoins }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    const filteredCoins = coins.filter((coin) =>
      coin.name.toLowerCase().includes(value.toLowerCase())
    );
    setCoins(filteredCoins);
  }, [value]);
  return (
    <div className="filter-block">
      <input
        value={value}
        onInput={(event) => {
          setValue(event.target.value);
        }}
        className="input"
        type="text"
        placeholder="Input..."
        name=""
        id=""
      />
    </div>
  );
};
export default FilterBlock;
