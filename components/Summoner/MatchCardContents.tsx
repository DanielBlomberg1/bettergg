import { MatchData } from "../../types/matchData";
import { queueMode, queueModes, queues } from "../../utils/queueTypes";
import ChampionIcon from "../Images/ChampionIcon";
import SummonerSpellIcon from "../Images/SummonerSpellIcon";
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
  const kda: number = (props.kills + props.assists) / props.deaths;

  const gameMode: queueMode = queues[props.gameType];

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
            className="column"
            style={{
              width: 64,
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
          <div className={styles.column} style={{}}>
            <h1> {gameMode?.name || "Uknown"} </h1>
            <h1 className={styles.xl}>
              <a>
                {props.kills} / {props.deaths} /{props.assists}
              </a>
            </h1>
            <h3
              style={{
                color: kda > 8 ? "#ffc011" : kda > 0.5 ? "#3f3e3e" : "#a51818",
              }}
            >
              {" "}
              {kda.toFixed(2)}
            </h3>
          </div>
          <div className={styles.column} style={{ margin: "50px" }}></div>
          {gameMode?.map === "Summoner's Rift" && (
            <div
              className={styles.column}
              style={{
                position: "relative",
                flexDirection: "column",
                right: "0",
                textAlign: "right",
              }}
            >
              <h1>
                Role{" "}
                {props.playedRole === "UTILITY" ? "SUPPORT" : props.playedRole}
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
