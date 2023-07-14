import styles from "./Appbar.module.css";
import AppbarLink from "./AppbarLink";

interface IAppbar {}

const Appbar: React.FC<IAppbar> = () => {
  return (
    <>
      <div className={styles.containerContainer}>
        <div className={styles.container}>
          <AppbarLink text="Search 🕵️" href="/search" />
          <AppbarLink text="BETTER.GG 🏠" href="/" />
          <AppbarLink text="Builds 🔨" href="/builds" />
        </div>
      </div>
    </>
  );
};

export default Appbar;
