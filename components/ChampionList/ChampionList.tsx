import Tippy from "@tippyjs/react";
import { useRouter } from "next/router";
import "tippy.js/dist/tippy.css";
import champions from "../../utils/champion.json";
import { championNameTransformer } from "../../utils/championNameTransformer";
import ChampionIcon from "../Images/ChampionIcon";
import styles from "./ChampionList.module.css";
interface IChampionList {}

const ChampionList: React.FC<IChampionList> = () => {
  const router = useRouter();
  const BOX_SIZE = 128;
  const rows = Object.values(champions.data).length / 10 + 1;

  const realChampionArray = Object.values(champions.data).map((champion) => {
    champion.name = championNameTransformer(champion.name);
    return champion;
  });

  // center the div
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          className={styles.container}
          style={{ width: 10 * BOX_SIZE, height: BOX_SIZE * rows }}
        >
          {realChampionArray.map((champion) => {
            return (
              <Tippy
                key={champion.name}
                placement="bottom-start"
                content={
                  <span>
                    <h2>{champion.name}</h2>
                  </span>
                }
              >
                <span onClick={() => router.push("/builds/" + champion.name)}>
                  <ChampionIcon
                    gameVersion={champions.version}
                    playedChampion={champion.name}
                  />
                </span>
              </Tippy>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ChampionList;
