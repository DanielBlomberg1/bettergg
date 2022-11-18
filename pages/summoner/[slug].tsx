import { InferGetServerSidePropsType } from "next";
import SummonerIcon from "../../components/Images/SummonerIcon";
import MatchCard from "../../components/Summoner/MatchCard";
import { MatchData } from "../../types/matchData";
import { SummonerData } from "../api/summoner/[...slug]";

export default function SummonerPage({
  summonerData,
  matchArr,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const gameversion = matchArr[0].info.gameVersion.split(".");
  const gameversionString = gameversion[0] + "." + gameversion[1] + ".1";

  return (
    <div>
      <h1>{summonerData.name}</h1>
      <SummonerIcon
        gameVersion={gameversionString}
        id={summonerData.profileIconId}
      />

      <div style={{ width: 800 }}>
        <h1 style={{ textAlign: "center" }}>MatchHistory</h1>
        {matchArr.map((match: MatchData) => (
          <div key={match.info.gameId}>
            <MatchCard match={match} summonerid={summonerData.puuid} />
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  let { slug } = context.params;
  slug.trim();

  const response = await fetch(`${process.env.HOSTED_AT}/api/summoner/${slug}`);
  const summonerData: SummonerData = await response.json();

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

  return {
    props: { summonerData, matchArr }, // will be passed to the page component as props
  };
}
