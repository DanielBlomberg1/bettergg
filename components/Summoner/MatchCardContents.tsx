import { MatchData } from "../../types/matchData";
import { queueMode, queueModes, queues } from "../../utils/queueTypes";
import useWindowDimensions from "../../utils/useWindowDimensions";
import ChampionIcon from "../Images/ChampionIcon";
import ItemIcon from "../Images/ItemIcon";
import SummonerSpellIcon from "../Images/SummonerSpellIcon";
import { ItemListHorizontal } from "../Itemlist/ItemList";
import styles from "./MatchCard.module.css";

interface Props {
  gameType: queueModes;
  match: MatchData;
  gameversion: string;
  playerWon: boolean;
  playedChampion: string;
  playedRole: string;
  kills: number;
  deaths: number;
  assists: number;
  summoner1Id: number;
  summoner2Id: number;
  item0Id: number;
  item1Id: number;
  item2Id: number;
  item3Id: number;
  item4Id: number;
  item5Id: number;
  item6Id: number;
}

export const MatchCardContents: React.FC<Props> = ({ ...props }) => {
  let gameMode: queueMode = queues[props.gameType];
  gameMode.name = gameMode.name.split(" ")[0];
  const KDA = (props.kills + props.assists) / props.deaths;
  const { width } = useWindowDimensions();

  return (
    <div
      className={styles.card}
      style={{ backgroundColor: props.playerWon ? "#58c26a" : "#e07d7d" }}
    >
      <div className={styles.container}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            overflow: "hidden",
          }}
        >
          <ChampionIcon
            gameVersion={props.gameversion}
            playedChampion={props.playedChampion}
          />
          <div className={styles.content}>
            <div
              className={styles.column}
              style={{
                width: 64,
                position: "relative",
              }}
            >
              <div className={styles.centerP}>
                <SummonerSpellIcon
                  gameVersion={props.gameversion}
                  id={props.summoner1Id}
                />
                <SummonerSpellIcon
                  gameVersion={props.gameversion}
                  id={props.summoner2Id}
                />
              </div>
            </div>
            {width > 600 && (
              <div className={styles.column} style={{ width: "225px" }}>
                <h1
                  style={
                    width < 800
                      ? { margin: "1vh", fontSize: "2.0rem" }
                      : { margin: "1vh" }
                  }
                >
                  {gameMode?.name || "Uknown"}
                </h1>
                <h1
                  className={styles.xl}
                  style={
                    width < 800
                      ? { marginLeft: "1vh", marginTop: 0, fontSize: "1.5rem" }
                      : { marginLeft: "1vh", marginTop: 0, fontSize: "2.0rem" }
                  }
                >
                  <a
                    style={
                      KDA < 1
                        ? { color: "rgb(173, 39, 24)" }
                        : KDA > 5
                        ? { color: "rgb(237, 190, 33)" }
                        : KDA > 3
                        ? { color: "98, 136, 227" }
                        : {}
                    }
                  >
                    {props.kills} / {props.deaths} /{props.assists}
                  </a>
                </h1>
              </div>
            )}

            {width > 900 && (
              <div style={{ right: "0", position: "relative" }}>
                {" "}
                <div
                  className={styles.column}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ItemListHorizontal
                    items={[
                      { id: props.item0Id },
                      { id: props.item1Id },
                      { id: props.item2Id },
                      { id: props.item3Id },
                      { id: props.item4Id },
                      { id: props.item5Id },
                    ]}
                    gameVersion={props.gameversion}
                    rows={2}
                  />
                  <ItemIcon
                    id={props.item6Id}
                    gameVersion={props.gameversion}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
