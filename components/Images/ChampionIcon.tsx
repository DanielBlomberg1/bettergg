import Image from "next/image";
import { FC } from "react";

interface Props {
  gameVersion: string;
  playedChampion: string;
}

const ChampionIcon: FC<Props> = ({ gameVersion, playedChampion }) => {
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
