import type { NextApiRequest, NextApiResponse } from "next";
import { MatchData } from "../../../types/matchData";

// datatype for a single match in riot api

async function fetchMatchData(puuid: string): Promise<MatchData[] | undefined> {
  const matchArray: MatchData[] = [];
  const response = await fetch(
    "https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/" +
      puuid +
      "/ids?api_key=" +
      process.env.LEAGUE_TOKEN
  );

  const data = await response.json();

  if (data.length === 0) {
    Promise.reject("No matches found");
  }
  data.forEach(async (matchId: string) => {
    const matchResponse = await fetch(
      "https://europe.api.riotgames.com/lol/match/v5/matches/" +
        matchId +
        "?start=0&count=20&api_key=" +
        process.env.LEAGUE_TOKEN
    );
    const matchData: MatchData = await matchResponse.json();
    console.log(matchData);
    matchArray.push(matchData);
  });

  if (matchArray.length === 0) {
    return matchArray;
  }
  return undefined;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MatchData[] | undefined>
) {
  const { slug } = req.query;
  const data: MatchData[] | undefined = await fetchMatchData(slug as string);

  res.status(200).json(data);
}
