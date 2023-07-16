import { MatchData } from "../../types/matchData";
import Loading from "../Loading/Loading";
import MatchCard from "../Summoner/MatchCard";

export interface IMatchHistory {
  matchArr: MatchData[];
  puuid: string;
}

export const MatchHistory: React.FC<IMatchHistory> = ({
  matchArr,
  puuid,
}: IMatchHistory) => {
  return (
    <>
      {matchArr.length > 0 ? (
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {matchArr.map((match: MatchData) => (
            <div key={match.info.gameId}>
              <MatchCard match={match} summonerid={puuid} />
            </div>
          ))}
        </div>
      ) : (
        <div style={{ height: "100vh", marginTop: "10vh" }}>
          <Loading />{" "}
        </div>
      )}
    </>
  );
};
