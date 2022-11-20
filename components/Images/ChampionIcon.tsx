import Image from "next/image";

interface Props {
  gameVersion: string;
  playedChampion: string;
}

const ChampionIcon: React.FC<Props> = ({ gameVersion, playedChampion }) => {
  return (
    <Image
      alt="ChampionIcon"
      width={200}
      height={200}
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
