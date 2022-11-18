import Image from "next/image";
import { FC } from "react";
import { MatchData } from "../../types/matchData";
import { queueMode, queueModes, queues } from "../../utils/queueTypes";
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
}

export const MatchCardContents: FC<Props> = ({
  gameType,
  gameversion,
  playerWon,
  playedChampion,
  playedRole,
  kills,
  deaths,
  assists,
}) => {
  const kda: number = (kills + assists) / deaths;

  const gameMode: queueMode = queues[gameType];

  return (
    <div
      style={{ backgroundColor: playerWon ? "#58c26a" : "#e07d7d" }}
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
        <Image
          alt="ChampionIcon"
          width={200}
          height={200}
          src={
            "http://ddragon.leagueoflegends.com/cdn/" +
            gameversion +
            "/img/champion/" +
            playedChampion +
            ".png"
          }
        />
        <div className={styles.content}>
          <div className="column">
            <h1> {gameMode?.name || "Uknown"} </h1>
            <h1 className={styles.xl}>
              <a>
                {kills} / {deaths} /{assists}
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
          {gameMode?.map === "Summoner's Rift" && (
            <div className="column" style={{ right: 5, textAlign: "right" }}>
              <h1>Role</h1>
              <h2>{playedRole === "UTILITY" ? "SUPPORT" : playedRole}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
