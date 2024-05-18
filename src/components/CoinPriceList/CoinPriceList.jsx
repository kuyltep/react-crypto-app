import styles from "./styles.module.css";
const CoinPriceList = ({ priceList }) => {
  return (
    <>
      <h3 className={styles["title"]}>Hours Price List</h3>
      <ul className={styles["price-list"]}>
        {priceList.map((price, index) => {
          return (
            <li className={styles["price-item"]} key={index}>
              <p className={styles["item-text"]}>{index + 1}:</p>
              <p className={styles["item-text"]}>{(+price).toFixed(2)}$</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default CoinPriceList;
