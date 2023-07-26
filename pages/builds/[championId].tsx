import { useRouter } from "next/router";
import ChampionIcon from "../../components/Images/ChampionIcon";
import RuneComponent from "../../components/RuneComponent/RuneComponent";
import styles from "../../styles/BuildsPage.module.css";
import champions from "../../utils/champion.json";
import { championNameTransformer } from "../../utils/championNameTransformer";
import { generateRandomRunes } from "../../utils/generateRandomRunes";

interface IChampionBuildPage {}

const ChampionBuildPage: React.FC<IChampionBuildPage> = () => {
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
export const getStaticProps = async (context: any) => {
  const championId = context.params.championId;
  return {
    props: {
      championId,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = Object.keys(champions.data).map((champion) => ({
    params: { championId: championNameTransformer(champion) },
  }));

  return { paths, fallback: false };
};

export default ChampionBuildPage;
