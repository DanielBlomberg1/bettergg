import { FC } from "react";
import { MatchData } from "../../types/matchData";

import { MatchCardContents } from "./MatchCardContents";

interface MatchCardProps {
  match: MatchData;
  summonerid: string;
}

const MatchCard: FC<MatchCardProps> = ({ match, summonerid }) => {
  console.log(match);
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

  const gameversion = match.info.gameVersion.split(".");
  const gameversionString = gameversion[0] + "." + gameversion[1] + ".1";

  return (
    <MatchCardContents
      match={match}
      gameversion={gameversionString}
      playerWon={playerWon}
      playedChampion={inspectedParticipant.championName}
      playedRole={inspectedParticipant.individualPosition}
      kills={inspectedParticipant.kills || 0}
      deaths={inspectedParticipant.deaths}
      assists={inspectedParticipant.assists}
    />
  );
};

export default MatchCard;
