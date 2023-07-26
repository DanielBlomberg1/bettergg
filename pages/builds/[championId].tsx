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
  const realChampionArray = Object.values(champions.data).map((champion) => {
    champion.name = championNameTransformer(champion.name);
    // No idea why champion NameTransformer is not enough getStaticPaths is a complete mystery to me.
    if (champion.name === "RenataGlasc") {
      champion.name = "Renata";
    } else if (champion.name === "Nunu&Willump") {
      champion.name = "Nunu";
    }
    return champion;
  });

  const paths = realChampionArray.map((champion) => ({
    params: { championId: champion.name },
  }));

  return { paths, fallback: false };
};

export default ChampionBuildPage;
