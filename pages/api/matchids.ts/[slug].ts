import type { NextApiRequest, NextApiResponse } from "next";

// datatype for a single match in riot api

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { slug } = req.query;
  const response = await fetch(
    "https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/" +
      slug +
      "/ids?start=0&count=5&api_key=" +
      process.env.LEAGUE_TOKEN
  );

  if (response) {
    res.status(200).json(JSON.stringify(response) as any);
  } else {
    res.status(404).json({ data: "no data" });
  }
}
