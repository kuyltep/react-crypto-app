import styles from "./styles.module.css";
const CoinInfo = ({ rank, imageUrl, price, name }) => {
  return (
    <>
      <div className={styles["coin-info"]}>
        <div className={styles["img-section"]}>
          <img className={styles["coin-img"]} src={imageUrl} alt="" />
        </div>
        <div className={styles["info-section"]}>
          <p className={styles["info-text"]}>Crypto rank: {rank}</p>
          <p className={styles["info-text"]}>Crypto name: {name}</p>
          <p className={styles["info-text"]}>
            Crypto price: {(+price).toFixed(2)}$
          </p>
        </div>
      </div>
      <div>
        <button className={styles["info-btn"]}>Buy {name}</button>
      </div>
    </>
  );
};

export default CoinInfo;
