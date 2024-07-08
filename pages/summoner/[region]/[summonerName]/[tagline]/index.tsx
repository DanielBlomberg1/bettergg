import { InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";
import Appbar from "../../../../../components/Appbar/Appbar";
import SummonerIcon from "../../../../../components/Images/SummonerIcon";
import { MatchHistory } from "../../../../../components/MatchHistory/MatchHistory";
import styles from "../../../../../styles/Summoner.module.css";
import { MatchData } from "../../../../../types/matchData";
import { SummonerData } from "../../../../api/summoner/[region]/[summonerName]/[tagline]";

export default function SummonerPage({
  summonerData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [matchArr, setMatchArr] = useState<MatchData[]>([]);

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

      console.log("ss", matchIds);

      const urls = matchIds.map((id: string) => {
        return `${process.env.HOSTED_AT}/api/match/${id}`;
      });

      const requests = urls.map((url: string) =>
        fetch(url).then((res) => res.json().then((data) => data.matchData))
      );

      const [...responses]: MatchData[] = await Promise.all(requests);
      console.log(responses);

      setMatchArr(responses);
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

          <div style={{ textAlign: "center" }}>
            <h1>MatchHistory</h1>
            <MatchHistory matchArr={matchArr} puuid={summonerData.puuid} />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  let { region, summonerName, tagline } = context.params;
  summonerName.trim();

  const response = await fetch(
    `${process.env.HOSTED_AT}/api/summoner/${region}/${summonerName}/${tagline}`
  );
  const summonerData: SummonerData = await response.json();

  if (!summonerData || summonerData?.status?.status_code === 404) {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }

  return {
    props: { summonerData }, // will be passed to the page component as props
  };
}
