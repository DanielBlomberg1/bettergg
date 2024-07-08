// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Region } from "../../../../../../types/region";
import { getContinentFromRegion } from "../../../../../../utils/getContinentFromRegion";

export interface SummonerData {
  [x: string]: any;
  accountId: string;
  profileIconId: number;
  revisionDate: number;
  name: string;
  id: string;
  puuid: string;
  summonerLevel: number;
}

async function fetchSummonerData(
  summonerName: string,
  tagline: string,
  region: Region
): Promise<SummonerData> {
  const continent = getContinentFromRegion(region);
  const response = await fetch(
    "https://" +
      continent +
      ".api.riotgames.com/riot/account/v1/accounts/by-riot-id/" +
      summonerName +
      "/" +
      tagline +
      "?api_key=" +
      process.env.LEAGUE_TOKEN
  );
  const data = await response.json();
  for (const key in data) {
    console.log(key, data[key]);
  }

  const summonerResponse = await fetch(
    "https://" +
      region +
      ".api.riotgames.com/lol/summoner/v4/summoners/by-puuid/" +
      data.puuid +
      "?api_key=" +
      process.env.LEAGUE_TOKEN
  );

  const summonerData = await summonerResponse.json();

  console.log("data " + data);
  return summonerData;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SummonerData>
) {
  const { summonerName, tagline, region } = req.query;
  const data: SummonerData = await fetchSummonerData(
    summonerName as string,
    tagline as string,
    region as Region
  );

  res.status(200).json(data);
}
