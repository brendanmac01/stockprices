import data from "../data.json";
import { useState } from "react";

const Price = (props) => {
  const symbol = props.symbol;
  const stock = data.find(item => item.symbol === symbol);

  const loaded = () => {
    return (
      <div>
        <h1>
          {stock.name} ({stock.symbol})
        </h1>
        <h2>{stock.lastPrice}</h2>
      </div>
    );
  };

  return stock ? loaded() : null;
};

export default Price;
