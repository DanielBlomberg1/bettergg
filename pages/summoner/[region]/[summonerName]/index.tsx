import { InferGetServerSidePropsType } from "next";
import Appbar from "../../../../components/Appbar/Appbar";
import SummonerIcon from "../../../../components/Images/SummonerIcon";
import MatchCard from "../../../../components/Summoner/MatchCard";
import styles from "../../../../styles/Summoner.module.css";
import { MatchData } from "../../../../types/matchData";
import { SummonerData } from "../../../api/summoner/[region]/[summonerName]";

export default function SummonerPage({
  summonerData,
  matchArr,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const gameversion = matchArr[0].info.gameVersion.split(".");
  const gameversionString = gameversion[0] + "." + gameversion[1] + ".1";

  return (
    <>
      <Appbar />
      <div className={styles.container}>
        <div className={styles.lowerContainer}>
          <h1>{summonerData.name}</h1>
          <SummonerIcon
            gameVersion={gameversionString}
            id={summonerData.profileIconId}
          />

          <div style={{ width: "100vh" }}>
            <h1 style={{ textAlign: "center" }}>MatchHistory</h1>
            {matchArr.map((match: MatchData) => (
              <div key={match.info.gameId}>
                <MatchCard match={match} summonerid={summonerData.puuid} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  let { region, summonerName } = context.params;
  summonerName.trim();

  const response = await fetch(
    `${process.env.HOSTED_AT}/api/summoner/${region}/${summonerName}`
  );
  const summonerData: SummonerData = await response.json();

  const matchResponse = await fetch(
    `${process.env.HOSTED_AT}/api/matchids/${summonerData.puuid}`,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  let matchIds = await matchResponse.json();
  matchIds = matchIds.data;

  let matchArr: MatchData[] = [];

  if (matchIds.length > 0) {
    for (let i = 0; i < matchIds.length; i++) {
      const matchResponse = await fetch(
        `${process.env.HOSTED_AT}/api/match/${matchIds[i]}`
      );
      const matchData: MatchData = (await matchResponse.json()).matchData;
      matchArr = [...matchArr, matchData];
    }
  }

  return {
    props: { summonerData, matchArr }, // will be passed to the page component as props
  };
}
