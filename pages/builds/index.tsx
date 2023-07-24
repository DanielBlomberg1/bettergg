import Appbar from "../../components/Appbar/Appbar";
import ChampionList from "../../components/ChampionList/ChampionList";
import RuneComponent from "../../components/RuneComponent/RuneComponent";
import styles from "../../styles/BuildsPage.module.css";

interface IBuildsPageProps {}

const BuildsPage: React.FC<IBuildsPageProps> = () => {
  return (
    <>
      <Appbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Builds Page</h1>
        <RuneComponent rune={mockRune} />
        <ChampionList />
      </div>
    </>
  );
};

export default BuildsPage;

const mockRune = {
  statPerks: {
    defense: 5002,
    flex: 5008,
    offense: 5008,
  },
  styles: [
    {
      description: "primaryStyle",
      selections: [
        {
          perk: 8369,
          var1: 2159,
          var2: 1857,
          var3: 0,
        },
        {
          perk: 8304,
          var1: 11,
          var2: 1,
          var3: 5,
        },
        {
          perk: 8345,
          var1: 3,
          var2: 0,
          var3: 0,
        },
        {
          perk: 8347,
          var1: 0,
          var2: 0,
          var3: 0,
        },
      ],
      style: 8300,
    },
    {
      description: "subStyle",
      selections: [
        {
          perk: 8236,
          var1: 28,
          var2: 0,
          var3: 0,
        },
        {
          perk: 8226,
          var1: 250,
          var2: 2102,
          var3: 0,
        },
      ],
      style: 8200,
    },
  ],
};
