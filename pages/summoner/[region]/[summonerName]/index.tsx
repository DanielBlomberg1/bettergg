import { InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";
import Appbar from "../../../../components/Appbar/Appbar";
import SummonerIcon from "../../../../components/Images/SummonerIcon";
import Loading from "../../../../components/Loading/Loading";
import MatchCard from "../../../../components/Summoner/MatchCard";
import styles from "../../../../styles/Summoner.module.css";
import { MatchData } from "../../../../types/matchData";
import useWindowDimensions from "../../../../utils/useWindowDimensions";
import { SummonerData } from "../../../api/summoner/[region]/[summonerName]";

export default function SummonerPage({
  summonerData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [matchArr, setMatchArr] = useState<MatchData[]>([]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const fetchClientSide = async () => {
      const matchResponse = await fetch(
        `${process.env.HOSTED_AT}/api/matchids/${summonerData.puuid}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      let matchIds = await matchResponse.json();
      matchIds = matchIds.data;
      let matches: MatchData[] = [];

      if (matchIds.length > 0) {
        for (let i = 0; i < matchIds.length; i++) {
          const matchResponse = await fetch(
            `${process.env.HOSTED_AT}/api/match/${matchIds[i]}`
          );
          const matchData: MatchData = (await matchResponse.json()).matchData;
          matches = [...matches, matchData];
        }
      }
      console.log(matches);
      setMatchArr(matches);
    };
    fetchClientSide();
  }, []);

  const gameversion = matchArr[0]?.info.gameVersion.split(".") || "12.6.1";
  const gameversionString =
    gameversion[0] + "." + gameversion[1] + ".1" || "12.6.1";

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

          <div>
            <h1 style={{ textAlign: "center" }}>MatchHistory</h1>

            {matchArr.length > 0 ? (
              matchArr.map((match: MatchData) => (
                <div key={match.info.gameId}>
                  <MatchCard match={match} summonerid={summonerData.puuid} />
                </div>
              ))
            ) : (
              <div style={{ height: "100vh", marginTop: "10vh" }}>
                <Loading />{" "}
              </div>
            )}
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

  return {
    props: { summonerData }, // will be passed to the page component as props
  };
}
