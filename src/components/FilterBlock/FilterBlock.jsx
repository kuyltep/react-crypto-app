import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import { CoinsContext } from "../../context/coinsContext";
import useFilteredCoins from "../../helpers/hooks/useFilteredCoins";

const FilterBlock = ({ setCoins }) => {
  const { coins } = useContext(CoinsContext);
  const { value, setValue } = useFilteredCoins(coins, setCoins);
  const [optionValue, setOptionValue] = useState("raiting");
  useEffect(() => {
    const filterFunctions = {
      name() {
        const filteredByName = coins
          .filter((coin) => coin.price > 0)
          .sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
        setCoins(filteredByName);
      },
      priceUp() {
        const filteredByPriceUp = coins
          .filter((coin) => coin.price > 0)
          .sort((a, b) => a.price - b.price);
        setCoins(filteredByPriceUp);
      },
      priceDown() {
        const filteredByPriceDown = coins
          .filter((coin) => coin.price > 0)
          .sort((a, b) => b.price - a.price);
        setCoins(filteredByPriceDown);
      },
      raiting() {
        const filteredByRaiting = coins
          .filter((coin) => coin.price > 0)
          .sort((a, b) => a.raiting - b.raiting);
        setCoins(filteredByRaiting);
      },
    };
    filterFunctions[optionValue]();
  }, [optionValue]);

  return (
    <div className="filter-block">
      <select
        defaultValue={"raiting"}
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
        <option className="select-item" value="raiting">
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
