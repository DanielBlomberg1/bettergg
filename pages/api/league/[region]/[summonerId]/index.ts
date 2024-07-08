import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const { region, summonerId } = req.query;
    const summonerIdString = summonerId as string;

    const leagueResponse = await fetch(
      `https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerIdString}?api_key=${process.env.LEAGUE_TOKEN}`
    );
    const leagueData = await leagueResponse.json();
    res.status(200).json(leagueData);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
}
