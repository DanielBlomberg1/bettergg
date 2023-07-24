import { useRouter } from "next/router";
import ChampionIcon from "../../components/Images/ChampionIcon";
import RuneComponent from "../../components/RuneComponent/RuneComponent";
import styles from "../../styles/BuildsPage.module.css";
import champions from "../../utils/champion.json";
import { generateRandomRunes } from "../../utils/generateRandomRunes";

interface IChampionList {}

const ChampionList: React.FC<IChampionList> = () => {
  const query = useRouter().query;
  const championName = query.championId as string;
  // center the div
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <h1 className={styles.xl}>{championName}</h1>
          <ChampionIcon
            gameVersion={champions.version}
            playedChampion={championName}
          />
          <RuneComponent rune={generateRandomRunes()} />
        </div>
      </div>
    </>
  );
};

export default ChampionList;
