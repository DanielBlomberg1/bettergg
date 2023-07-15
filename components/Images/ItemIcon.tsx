import Tippy from "@tippyjs/react";
import Image from "next/image";
import "tippy.js/dist/tippy.css"; // optional
import { v4 as uuidv4 } from "uuid";
import items from "../../utils/item.json";

interface Props {
  gameVersion: string;
  id: number;
}

export const itemDescJsx = (itemDescription: string) => {
  const re = new RegExp(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g);
  const reBr = new RegExp(/<br\s*[/]?>/gi);

  let itemDescritionBlocks = itemDescription.split("<br>");
  let itemDescJsx = itemDescritionBlocks.map((block) => {
    let uuid = uuidv4();
    return (
      <span key={uuid}>
        {block.replace(reBr, "\n").replace(re, "")}
        <br />
      </span>
    );
  });
  return itemDescJsx;
};

const ItemIcon: React.FC<Props> = ({ gameVersion, id }) => {
  let itemName, itemDescription, itemPlaintext, itemGold, itemTags, itemStats;

  for (const [key, value] of Object.entries(items.data)) {
    if (Number(key) === id) {
      itemName = value.name;
      itemDescription = value.description;
      itemPlaintext = value.plaintext;
      itemGold = value.gold;
      itemTags = value.tags;
      itemStats = value.stats;
    }
  }
  // do the same with old for loop style with i = 0; i < items.data.length; i++

  if (itemDescription === undefined) return <></>;

  const itemDesc = itemDescJsx(itemDescription);

  const ITEM =
    id === 0 || !id ? (
      <></>
    ) : (
      <div style={{ width: 64, height: 64 }}>
        <Tippy
          theme="translucent"
          placement="bottom-start"
          content={
            <>
              <div style={{ minWidth: "25vh" }}>
                <span>
                  <b>{itemName}</b>
                </span>
                <span
                  style={{
                    right: "2vh",
                    position: "absolute",
                    color: "yellow",
                  }}
                >
                  {itemGold?.total.toString()}
                </span>
              </div>
              <hr />
              <span>{itemDesc}</span>
            </>
          }
        >
          <span>
            <Image
              alt="ItemIcon"
              width={64}
              height={64}
              src={
                "http://ddragon.leagueoflegends.com/cdn/" +
                gameVersion +
                "/img/item/" +
                id +
                ".png"
              }
            />
          </span>
        </Tippy>
      </div>
    );

  return ITEM;
};
export default ItemIcon;
