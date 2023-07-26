import { useRouter } from "next/router";
import Appbar from "../../components/Appbar/Appbar";
import ChampionIcon from "../../components/Images/ChampionIcon";
import { IItem, ItemListHorizontal } from "../../components/Itemlist/ItemList";
import RuneComponent from "../../components/RuneComponent/RuneComponent";
import styles from "../../styles/BuildsPage.module.css";
import champions from "../../utils/champion.json";
import { generateRandomItemIds } from "../../utils/generateRandomItemIds";
import { generateRandomRunes } from "../../utils/generateRandomRunes";

interface IChampionBuildPage {}

const ChampionBuildPage: React.FC<IChampionBuildPage> = () => {
  const query = useRouter().query;
  const championName = query.championId as string;
  const randomItemIds: IItem[] = generateRandomItemIds(6);
  // center the div
  return (
    <>
      <Appbar />
      <div
        className={styles.container}
        style={{
          height: "80vh",
          width: "80vw",
          margin: "auto",
          marginTop: "5vh",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <div style={{ left: "50%", position: "fixed", margin: "auto" }}>
              <h1 className={styles.xl}>{championName}</h1>
              <ChampionIcon
                gameVersion={champions.version}
                playedChampion={championName}
              />
            </div>

            <div style={{ marginBottom: "20vh" }}></div>

            <div style={{ display: "flex" }}>
              <div style={{ marginTop: "-15vh" }}>
                <h2 className={styles.medium} style={{ marginBottom: "1vh" }}>
                  Runes
                </h2>
                <RuneComponent rune={generateRandomRunes()} />
              </div>

              <div style={{ marginTop: "5vh" }}>
                <h2 className={styles.medium} style={{ marginBottom: "1vh" }}>
                  Pro Build
                </h2>
                <ItemListHorizontal
                  items={randomItemIds}
                  gameVersion={champions.version}
                  rows={2}
                />
              </div>
            </div>
          </div>
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
  const paths = Object.values(champions.data).map((champion) => ({
    params: { championId: champion.id },
  }));

  return { paths, fallback: false };
};

export default ChampionBuildPage;
