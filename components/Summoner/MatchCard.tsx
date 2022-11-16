import Image from "next/image";
import { FC } from "react";
import { MatchData } from "../../types/matchData";

import styles from "./MatchCard.module.css";

interface MatchCardProps {
  match: MatchData;
  summonerid: string;
}

const MatchCard: FC<MatchCardProps> = ({ match, summonerid }) => {
  console.debug("match", match);
  let playerWon = false;
  let inspectedParticipant: any;

  match.info.participants.forEach((player) => {
    if (player.puuid === summonerid) {
      if (player.win) {
        playerWon = true;
      }
      inspectedParticipant = player;
    }
  });

  const highestKillstreak = inspectedParticipant.pentakill
    ? "pentakill"
    : inspectedParticipant.quadraKills
    ? "quatrakill"
    : inspectedParticipant.tripleKills
    ? "triplekill"
    : inspectedParticipant.doubleKills
    ? "doublekill"
    : "singlekill";

  const gameversion = match.info.gameVersion.split(".");
  const gameversionString = gameversion[0] + "." + gameversion[1] + ".1";

  console.log(
    "http://ddragon.leagueoflegends.com/cdn/" +
      gameversionString +
      "/img/profileicon/" +
      inspectedParticipant.profileIcon +
      ".png"
  );
  console.log(inspectedParticipant.chmapi);

  return (
    <div
      style={{ backgroundColor: playerWon ? "#58c26a" : "#e07d7d" }}
      className={styles.container}
    >
      <div className={styles.content}>
        <div className={styles.column}>
          <Image
            width={50}
            height={50}
            src={
              "http://ddragon.leagueoflegends.com/cdn/" +
              gameversionString +
              "/img/champion/" +
              inspectedParticipant.championName +
              ".png"
            }
          />
        </div>
        <div className={styles.column}>
          <p>Game Mode</p>
          <div>{match.info.gameMode}</div>
          <p>Game Duration</p>
          <div>{Math.round(match.info.gameDuration / 60)} mins</div>
        </div>
        <div className={styles.column}>
          {inspectedParticipant && (
            <>
              <p>Champion played</p>
              <div>{inspectedParticipant.championName}</div>
              <div>
                {inspectedParticipant.kills} / {inspectedParticipant.deaths} /{" "}
                {inspectedParticipant.assists}
              </div>
              <p>
                {(
                  inspectedParticipant.kills +
                  inspectedParticipant.assists / inspectedParticipant.deaths
                ).toFixed(2)}
              </p>
              {highestKillstreak != "singlekill" && <> {highestKillstreak} </>}
            </>
          )}
        </div>
        <div className={styles.column}></div>
      </div>
    </div>
  );
};

export default MatchCard;
