import React, { useEffect, useState } from "react";
import "./styles.css";
import useFilteredCoins from "../../helpers/hooks/useFilteredCoins";

const FilterBlock = () => {
  const { value, setValue } = useFilteredCoins();
  const [optionValue, setOptionValue] = useState("raiting");
  useEffect(() => {}, [optionValue]);

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
