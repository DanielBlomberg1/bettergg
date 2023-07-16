import Tippy from "@tippyjs/react";
import Image from "next/image";
import "tippy.js/dist/tippy.css"; // optional
import SummonerSpells from "../../utils/summoner.json";

interface Props {
  gameVersion: string;
  id: any;
}

const SummonerSpellIcon: React.FC<Props> = ({ gameVersion, id }) => {
  let spellId = "";
  let spellName = "";
  let spellDescription = "";

  Object.values(SummonerSpells.data).forEach((spell) => {
    if (spell.key == id) {
      spellId = spell.id;
      spellName = spell.name;
      spellDescription = spell.description;
    }
  });

  return (
    <div style={{ width: 64, height: 64 }}>
      <Tippy
        theme="translucent"
        placement="bottom-start"
        content={
          <>
            <span>{spellName}</span>
            <hr />
            <span>{spellDescription}</span>
          </>
        }
      >
        <span>
          <Image
            alt="SummonerSpellIcon"
            width={64}
            height={64}
            src={"/img/spell/" + spellId + ".png"}
          />
        </span>
      </Tippy>
    </div>
  );
};
export default SummonerSpellIcon;
