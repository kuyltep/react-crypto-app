import styles from "./styles.module.css";
const Card = ({ balance, name, setBalance }) => {
  return (
    <div className={styles.card}>
      <div className={styles["card-block"]}>
        <p>CRYPTO FINANCE</p>
        <button
          onClick={() => setBalance((prev) => prev + 1000)}
          className={styles["card-button"]}
        >
          Add money
        </button>
      </div>
      <div className={styles["card-block"]}>
        <p>{name}</p>
        <p>{balance}$</p>
      </div>
    </div>
  );
};
export default Card;
