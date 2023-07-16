import useWindowDimensions from "../../utils/useWindowDimensions";
import styles from "./Appbar.module.css";
import AppbarLink from "./AppbarLink";

interface IAppbar {}

const Appbar: React.FC<IAppbar> = () => {
  const dims = useWindowDimensions() || undefined;
  const width = dims?.width || 0;
  return (
    <>
      <div className={styles.containerContainer}>
        <div className={styles.container}>
          <AppbarLink text="Search 🕵️" href="/search" />
          <AppbarLink text="BETTER.GG 🏠" href="/" />
          {width > 700 && <AppbarLink text="Builds 🔨" href="/builds" />}
        </div>
      </div>
    </>
  );
};

export default Appbar;
