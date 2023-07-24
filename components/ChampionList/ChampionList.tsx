import Tippy from "@tippyjs/react";
import { useRouter } from "next/router";
import champions from "../../utils/champion.json";
import ChampionIcon from "../Images/ChampionIcon";
import styles from "./ChampionList.module.css";
interface IChampionList {}

const ChampionList: React.FC<IChampionList> = () => {
  const router = useRouter();
  const BOX_SIZE = 128;
  const rows = Object.values(champions.data).length / 10 + 1;
  // center the div
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          className={styles.container}
          style={{ width: 10 * BOX_SIZE, height: BOX_SIZE * rows }}
        >
          {Object.values(champions.data).map((champion) => {
            let name = champion.name
              .replaceAll(" ", "")
              .replaceAll("'", "")
              .replaceAll(".", "");
            if (name === "Wukong") {
              name = "MonkeyKing";
            } else if (name === "Nunu&Willump") {
              name = "Nunu";
            } else if (name === "RenataGlasc") {
              name = "Renata";
            }
            return (
              <Tippy
                key={champion.id}
                theme="translucent"
                placement="bottom-start"
                content={
                  <>
                    <h2>{champion.name}</h2>
                  </>
                }
              >
                <span onClick={() => router.push("/builds/" + name)}>
                  <ChampionIcon
                    key={champion.id}
                    gameVersion={champions.version}
                    playedChampion={name}
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
