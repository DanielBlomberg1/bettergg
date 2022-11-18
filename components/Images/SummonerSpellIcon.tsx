import Image from "next/image";
import { FC } from "react";
import SummonerSpells from "../../utils/summoner.json";

interface Props {
  gameVersion: string;
  id: any;
}

const SummonerSpellIcon: FC<Props> = ({ gameVersion, id }) => {
  let spellName = "";

  Object.values(SummonerSpells.data).forEach((spell) => {
    if (spell.key == id) {
      spellName = spell.id;
    }
  });

  return (
    <Image
      alt="SummonerSpellIcon"
      width={64}
      height={64}
      src={
        "http://ddragon.leagueoflegends.com/cdn/" +
        gameVersion +
        "/img/spell/" +
        spellName +
        ".png"
      }
    />
  );
};
export default SummonerSpellIcon;
