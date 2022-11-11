import { useEffect, useState } from "react";
import { SummonerData } from "../api/summoner/[...slug]";

const SearchPage = () => {
  //send request to server to get data
  // of the search results
  const [value, setValue] = useState("");
  const [summonerData, setSummonerData] = useState({} as SummonerData);

  const fecthSummoner = async () => {
    const response = await fetch("/api/summoner/" + value);
    const data: SummonerData = await response.json();
    console.log(data);
    setSummonerData(data);
  };

  useEffect(() => {
    setValue(value);
    console.log(value);
  }, [value]);

  return (
    <>
      <input
        type="text"
        onInput={(e) => setValue((e.target as HTMLTextAreaElement).value)}
        placeholder="Type in your summoner name..."
      />
      <button onClick={() => fecthSummoner()}>Search</button>

      {summonerData && (
        <>
          <div>
            <h1>{summonerData.name}</h1>
            <h2>{summonerData.summonerLevel}</h2>
          </div>
        </>
      )}
    </>
  );
};

export default SearchPage;
