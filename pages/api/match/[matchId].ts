import type { NextApiRequest, NextApiResponse } from "next";
import { MatchData } from "../../../types/matchData";

// datatype for a single match in riot api

async function fetchMatchData(matchID: string): Promise<MatchData | undefined> {
  const matchResponse = await fetch(
    "https://europe.api.riotgames.com/lol/match/v5/matches/" +
      matchID +
      "?api_key=" +
      process.env.LEAGUE_TOKEN
  );
  const matchData: MatchData = (await matchResponse.json()) || undefined;
  if (matchData) {
    return matchData;
  }

  return undefined;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { matchId } = req.query;

  if (matchId) {
    let matchData = await fetchMatchData(matchId as string);

    res.status(200).json({ matchData });
  } else {
    res.status(400).json({ error: "No match ID provided" });
  }
}
