import Image from "next/image";
import { FC } from "react";
import { MatchData } from "../../types/matchData";
import styles from "./MatchCard.module.css";

interface Props {
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
  gameversion,
  playerWon,
  playedChampion,
  playedRole,
  kills,
  deaths,
  assists,
}) => {
  const kda: number = (kills + assists) / deaths;
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
            <h1>
              {kills} / {deaths} /{assists}
            </h1>
            <h2
              style={{
                color: kda > 8 ? "#ffc011" : kda > 0.5 ? "#3f3e3e" : "#a51818",
              }}
            >
              {" "}
              {kda.toFixed(2)}
            </h2>
          </div>
          <div className="column">
            <h1>Role</h1>
            <h2>{playedRole === "UTILITY" ? "SUPPORT" : playedRole}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
