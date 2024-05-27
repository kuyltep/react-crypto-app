import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import { CoinsContext } from "../../context/coinsContext";
import useFilteredCoins from "../../helpers/hooks/useFilteredCoins";

const FilterBlock = ({ setCoins }) => {
  const { coins } = useContext(CoinsContext);
  const { filteredCoins } = useContext(CoinsContext);
  const { value, setValue } = useFilteredCoins(coins, setCoins);
  const [optionValue, setOptionValue] = useState("raiting");
  useEffect(() => {
    const filterFunctions = {
      name() {
        const filteredByName = coins.sort((a, b) => a.name < b.name);
        console.log(filteredByName);
        setCoins(filteredByName);
      },
      priceUp() {
        const filteredByPriceUp = coins.filter((coin) => coin.price >= 100);
        console.log(filteredByPriceUp);
        setCoins(filteredByPriceUp);
        console.log(filteredCoins);
      },
      priceDown() {},
      raiting() {},
    };
    console.log("Filter");
    filterFunctions[optionValue]();
  }, [optionValue]);

  return (
    <div className="filter-block">
      <select
        name=""
        id=""
        className="filter-select"
        onChange={(e) => {
          setOptionValue(e.target.value);
        }}
      >
        <option className="select-item" value="name">
          Name
        </option>
        <option className="select-item" value="priceUp">
          Price Up
        </option>
        <option className="select-item" value="priceDown">
          Price Down
        </option>
        <option className="select-item" value="raiting" selected>
          Raiting
        </option>
      </select>
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
export default React.memo(FilterBlock);
