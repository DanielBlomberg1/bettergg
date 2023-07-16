import * as champions from "../../utils/champion.json";
import ChampionIcon from "../Images/ChampionIcon";
import styles from "./ChampionList.module.css";
interface IChampionList {}

const ChampionList: React.FC<IChampionList> = () => {
  const BOX_SIZE = 128;
  const rows = Object.values(champions.data).length / 10;
  return (
    <>
      <div>
        <h1>ChampionList</h1>
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
              <ChampionIcon
                key={champion.id}
                gameVersion={champions.version}
                playedChampion={name}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ChampionList;
