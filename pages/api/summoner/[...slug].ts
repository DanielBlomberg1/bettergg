// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export interface SummonerData {
  accountId: string;
  profileIconId: number;
  revisionDate: number;
  name: string;
  id: string;
  puuid: string;
  summonerLevel: number;
}

async function fetchSummonerData(summonerName: string): Promise<SummonerData> {
  const response = await fetch(
    "https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
      summonerName +
      "?api_key=" +
      process.env.LEAGUE_TOKEN
  );
  const data = await response.json();
  return data;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SummonerData>
) {
  const { slug } = req.query;
  const data: SummonerData = await fetchSummonerData(slug as string);

  res.status(200).json(data);
}
