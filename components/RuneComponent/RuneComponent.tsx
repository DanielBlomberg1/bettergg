import { Runes } from "../../types/matchData";
import runeData from "../../utils/runesReforged.json";
import RuneImage from "../Images/RuneImage";

interface IRuneComponent {
  rune: Runes;
}

const RuneComponent: React.FC<IRuneComponent> = ({ rune }) => {
  if (rune === undefined) return <></>;
  let lowerTierRunes: any[] = [];
  const pR = Object.values(rune.styles).map((style) => {
    // get the primary rune
    const runeStyle = Object.values(runeData).find((rn) => {
      style.selections.forEach((selection) => {
        rn.slots.forEach((slot) => {
          slot.runes.forEach((rn3) => {
            if (rn3.id === selection.perk) {
              lowerTierRunes.push(rn3);
            }
          });
        });
      });
      return rn.id === style.style;
    });
    return runeStyle;
  });

  // split lower tier runes into 2 arrays
  if (pR && pR.length !== 2) {
    return <></>;
  }
  if (lowerTierRunes && lowerTierRunes.length !== 6) {
    return <></>;
  }
  const lowerTierRunes1 = lowerTierRunes.slice(0, 4);
  const lowerTierRunes2 = lowerTierRunes.slice(4, 6);

  const re = new RegExp(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g);
  const reBr = new RegExp(/<br\s*[/]?>/gi);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "block",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64 * 3,
          }}
        >
          <div style={{ marginLeft: "16px" }}>
            <RuneImage
              imageString={pR[0]?.icon as string}
              runeName={pR[0]?.name as string}
              description={""}
              width={32}
              height={32}
            />
          </div>

          {lowerTierRunes1.map((rn, i) => {
            return (
              <div
                key={rn.id}
                style={
                  i == 0
                    ? {
                        marginTop: "-16px",
                        borderRadius: "50% ",
                        marginLeft: "4px",
                      }
                    : { top: "16px", position: "relative", marginLeft: "16px" }
                }
              >
                <RuneImage
                  imageString={rn.icon as string}
                  runeName={rn.name as string}
                  description={rn.shortDesc as string}
                  width={i === 0 ? 64 : 32}
                  height={i === 0 ? 64 : 32}
                  style={i === 0 ? { borderRadius: "50%" } : {}}
                />
              </div>
            );
          })}
        </div>
        <div>
          <RuneImage
            imageString={pR[1]?.icon as string}
            runeName={pR[1]?.name as string}
            description={""}
            width={32}
            height={32}
          />
          {lowerTierRunes2.map((rn) => {
            return (
              <RuneImage
                key={rn.id}
                imageString={rn.icon as string}
                runeName={rn.name as string}
                description={(rn.shortDesc as string)
                  .replace(reBr, "\n")
                  .replace(re, "")}
                width={32}
                height={32}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RuneComponent;
