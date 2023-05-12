import data from "../data.json";
import { useParams } from "react-router-dom";


const Price = () => {
  const { symbol } = useParams();
  const stock = data.find((item) => item.symbol === symbol);

  return (
    <div>
      <h1>{stock.name}</h1>
      <h2>Symbol: {stock.symbol}</h2>
      <p>Last Price: {stock.lastPrice}</p>
      <p>Change: {stock.change}</p>
      <p>High: {stock.high}</p>
      <p>Low: {stock.low}</p>
      <p>Open: {stock.open}</p>
    </div>
  );
};

export default Price;
