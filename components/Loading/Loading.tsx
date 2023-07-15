import styles from "./Loading.module.css";
interface ILoading {
  // props
}

const Loading: React.FC<ILoading> = () => {
  return <div className={styles.loading} />;
};

export default Loading;
