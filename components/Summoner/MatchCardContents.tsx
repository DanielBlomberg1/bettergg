import { MatchData } from "../../types/matchData";
import { queueMode, queueModes, queues } from "../../utils/queueTypes";
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
  const gameMode: queueMode = queues[props.gameType];
  const KDA = (props.kills + props.assists) / props.deaths;

  return (
    <div
      style={{ backgroundColor: props.playerWon ? "#58c26a" : "#e07d7d" }}
      className={styles.container}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: 200,
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
            <div
              style={{
                width: 64,
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: "10%",
              }}
            >
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

          <div className={styles.column} style={{}}>
            <h1> {gameMode?.name || "Uknown"} </h1>
            <h1 className={styles.xl}>
              <a
                style={
                  KDA < 1
                    ? { color: "rgb(173, 39, 24)" }
                    : KDA > 5
                    ? { color: "rgb(237, 190, 33)" }
                    : {}
                }
              >
                {props.kills} / {props.deaths} /{props.assists}
              </a>
            </h1>
          </div>
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
            <ItemIcon id={props.item6Id} gameVersion={props.gameversion} />
          </div>
        </div>
      </div>
    </div>
  );
};
