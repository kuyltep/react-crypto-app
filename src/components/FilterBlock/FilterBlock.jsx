import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import { CoinsContext } from "../../context/coinsContext";
import useFilteredCoins from "../../helpers/hooks/useFilteredCoins";

const FilterBlock = ({ setCoins }) => {
  const { coins } = useContext(CoinsContext);
  const { value, setValue } = useFilteredCoins(coins, setCoins);
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
export default React.memo(FilterBlock);
