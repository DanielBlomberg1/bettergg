import { useEffect, useState } from "react";
import { MatchData } from "../../types/matchData";
import { SummonerData } from "../api/summoner/[...slug]";

const SearchPage = () => {
  //send request to server to get data
  // of the search results
  const [value, setValue] = useState("");
  const [summonerData, setSummonerData] = useState({} as SummonerData);
  const [matchData, setMatchData] = useState({} as MatchData[]);

  const fetchSummoner = async () => {
    const response = await fetch("/api/summoner/" + value);
    const data: SummonerData = await response.json();
    console.log(data);
    setSummonerData(data);
  };

  async function fetchMatchData() {
    const response = await fetch("/api/matches/" + summonerData.puuid);
    const data: MatchData[] = await response.json();
    console.log(data);
    setMatchData(data);
  }

  useEffect(() => {
    setValue(value);
    console.log(value);
  }, [value]);

  useEffect(() => {
    if (summonerData.puuid) {
      fetchMatchData();
    }
  }, [summonerData]);

  return (
    <>
      <input
        type="text"
        onInput={(e) => setValue((e.target as HTMLTextAreaElement).value)}
        placeholder="Type in your summoner name..."
      />
      <button onClick={() => fetchSummoner()}>Search</button>

      {summonerData && (
        <>
          <div>
            <h1>{summonerData.name}</h1>
            <h2>{summonerData.summonerLevel}</h2>
          </div>
        </>
      )}
      {matchData.length > 0 && (
        <>
          {matchData.map((match) => {
            return (
              <div key={match.info.gameId}>
                <h1>{match.info.gameName}</h1>
                <h2>{match.info.gameDuration}</h2>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default SearchPage;
