import {
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";

const CoinPriceList = () => {
  const { coinPrices } = useSelector((state) => state.coins);
  const updatedPrices = [...coinPrices].reverse();
  const renderLineChart = (
    <LineChart
      width={1500}
      height={1500}
      className={styles["coin-chart"]}
      data={updatedPrices}
    >
      <Line
        type={"monotone"}
        dataKey={"price"}
        stroke="gold"
        strokeWidth={2}
        color="black"
      />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      {/* <XAxis dataKey="timestamp" /> */}
      <YAxis />
      <Tooltip />
    </LineChart>
  );
  return (
    <>
      <h3 className={styles["title"]}>Price chart</h3>
      <select name="time" id="" defaultValue={"1h"}>
        <option value="1h">1 hour</option>
        <option value="3h">3 hours</option>
        <option value="12h">12 hours</option>
        <option value="24h">24 hours</option>
        <option value="7d">7 days</option>
        <option value="30d">30 days</option>
        <option value="3m">3 month</option>
        <option value="1y">1 year</option>
        <option value="3y">3 years</option>
      </select>
      <div className={styles["price-chart"]}>{renderLineChart}</div>
    </>
  );
};
export default CoinPriceList;
