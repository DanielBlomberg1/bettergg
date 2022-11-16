import { InferGetServerSidePropsType } from "next";
import { MatchData } from "../../types/matchData";
import { SummonerData } from "../api/summoner/[...slug]";

export default function SummonerPage({
  summonerData,
  matchArr,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log("matches", matchArr);
  return (
    <div>
      <h1>{summonerData.name}</h1>
      <h1>MatchHistory</h1>
      <ul>
        {matchArr.map((match: MatchData) => (
          <li key={match.info.gameId}>{match.info.gameDuration}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  let { slug } = context.params;
  slug.trim();
  console.log(slug);

  const response = await fetch(`${process.env.HOSTED_AT}/api/summoner/${slug}`);
  const summonerData: SummonerData = await response.json();
  console.log("summoner response for name ", summonerData);

  const data = await fetch(
    "https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/" +
      summonerData.puuid +
      "/ids?start=0&count=5&api_key=" +
      process.env.LEAGUE_TOKEN
  );
  const matchIds = await data.json();

  let matchArr: MatchData[] = new Array();

  if (matchIds.length > 0) {
    for (let i = 0; i < matchIds.length; i++) {
      const matchResponse = await fetch(
        "https://europe.api.riotgames.com/lol/match/v5/matches/" +
          matchIds[i] +
          "?api_key=" +
          process.env.LEAGUE_TOKEN
      );
      const matchData: MatchData = await matchResponse.json();
      matchArr = [...matchArr, matchData];
    }
  }
  console.log("MATCHES DOESNT PRINTS HERE : ", matchArr);

  return {
    props: { summonerData, matchArr }, // will be passed to the page component as props
  };
}
