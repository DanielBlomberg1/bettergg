import Image from "next/image";
import { FC } from "react";

interface Props {
  gameVersion: string;
  id: number;
}

const SummonerIcon: FC<Props> = ({ gameVersion, id }) => {
  return (
    <Image
      alt="SummonerSpellIcon"
      width={200}
      height={200}
      src={
        "http://ddragon.leagueoflegends.com/cdn/" +
        gameVersion +
        "/img/profileicon/" +
        id +
        ".png"
      }
    />
  );
};
export default SummonerIcon;
