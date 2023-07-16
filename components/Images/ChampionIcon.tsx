import Image from "next/image";

interface Props {
  gameVersion: string;
  playedChampion: string;
}

const ChampionIcon: React.FC<Props> = ({ gameVersion, playedChampion }) => {
  if (gameVersion === "12.6.1") {
    return (
      <Image
        alt="ChampionIcon"
        width={128}
        height={128}
        src={"/img/champion/" + playedChampion + ".png"}
      />
    );
  }
  return (
    <Image
      alt="ChampionIcon"
      width={128}
      height={128}
      src={
        "http://ddragon.leagueoflegends.com/cdn/" +
        gameVersion +
        "/img/champion/" +
        playedChampion +
        ".png"
      }
    />
  );
};
export default ChampionIcon;
