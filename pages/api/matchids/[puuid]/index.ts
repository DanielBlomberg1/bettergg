import type { NextApiRequest, NextApiResponse } from "next";

// datatype for a single match in riot api

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { puuid } = req.query;
  const response = await fetch(
    "https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/" +
      puuid +
      "/ids?start=0&count=5&api_key=" +
      process.env.LEAGUE_TOKEN
  );

  const data = await response.json();

  if (data) {
    res.status(200).json({ data: data });
  } else {
    res.status(404).json({ data: "no data" });
  }
}
