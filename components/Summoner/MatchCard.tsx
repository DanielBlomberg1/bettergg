import Image from "next/image";
import { FC } from "react";
import { MatchData } from "../../types/matchData";

import styles from "./MatchCard.module.css";

interface MatchCardProps {
  match: MatchData;
  summonerid: string;
}

const MatchCard: FC<MatchCardProps> = ({ match, summonerid }) => {
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

  const KDA = (
    (inspectedParticipant.kills + inspectedParticipant.assists) /
    inspectedParticipant.deaths
  ).toFixed(2);

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
            gameversionString +
            "/img/champion/" +
            inspectedParticipant.championName +
            ".png"
          }
        />
        <div className={styles.content}>
          <div className="column">
            <h1>
              {inspectedParticipant.kills} / {inspectedParticipant.deaths} /{" "}
              {inspectedParticipant.assists}
            </h1>
            <h2
              style={{
                color:
                  parseInt(KDA) > 8
                    ? "#ffc011"
                    : parseInt(KDA) > 0.5
                    ? "#3f3e3e"
                    : "#a51818",
              }}
            >
              {" "}
              {KDA}
            </h2>
          </div>
          <div className="column">
            <h1>Role</h1>
            <h2>
              {inspectedParticipant.individualPosition === "UTILITY"
                ? "SUPPORT"
                : inspectedParticipant.individualPosition}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
