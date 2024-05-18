import Loading from "../../components/Loading/Loading";
import styles from "./styles.module.css";

const NotFound = () => {
  return (
    <div className={styles.page}>
      <p className={styles.text}>404. Page Not Found</p>
      <Loading type="cubes" color="black" />
    </div>
  );
};
export default NotFound;
