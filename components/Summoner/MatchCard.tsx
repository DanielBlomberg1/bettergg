import { MatchData } from "../../types/matchData";
import { queueModes } from "../../utils/queueTypes";

import { MatchCardContents } from "./MatchCardContents";

interface MatchCardProps {
  match: MatchData;
  summonerid: string;
}

interface MatchCardContentsProps {
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

const MatchCard: React.FC<MatchCardProps> = ({ match, summonerid }) => {
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

  const summoner1Id: number = inspectedParticipant.summoner1Id;
  const summoner2Id: number = inspectedParticipant.summoner2Id;

  const item0Id: number = inspectedParticipant.item0;
  const item1Id: number = inspectedParticipant.item1;
  const item2Id: number = inspectedParticipant.item2;
  const item3Id: number = inspectedParticipant.item3;
  const item4Id: number = inspectedParticipant.item4;
  const item5Id: number = inspectedParticipant.item5;
  const item6Id: number = inspectedParticipant.item6;

  const matchCardContentsProps: MatchCardContentsProps = {
    gameversion: gameversionString,
    playerWon,
    gameType: match.info.queueId,
    match,
    playedChampion: inspectedParticipant.championName,
    playedRole: inspectedParticipant.role,
    kills: inspectedParticipant.kills,
    deaths: inspectedParticipant.deaths,
    assists: inspectedParticipant.assists,
    summoner1Id,
    summoner2Id,
    item0Id,
    item1Id,
    item2Id,
    item3Id,
    item4Id,
    item5Id,
    item6Id,
  };

  return <MatchCardContents {...matchCardContentsProps} />;
};

export default MatchCard;
