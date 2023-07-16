import Appbar from "../../components/Appbar/Appbar";
import ChampionList from "../../components/ChampionList/ChampionList";
import styles from "../../styles/BuildsPage.module.css";

interface IBuildsPageProps {}

const BuildsPage: React.FC<IBuildsPageProps> = () => {
  return (
    <>
      <Appbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Builds Page</h1>
        <ChampionList />
      </div>
    </>
  );
};

export default BuildsPage;
