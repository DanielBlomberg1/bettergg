import { Runes } from "../types/matchData";
import runeData from "./runesReforged.json";

export const generateRandomRunes = (): Runes => {
  const primaryStyle = runeData[Math.floor(Math.random() * runeData.length)];
  let subStyle = runeData[Math.floor(Math.random() * runeData.length)];
  while (subStyle === primaryStyle) {
    subStyle = runeData[Math.floor(Math.random() * runeData.length)];
  }

  const primaryLesserRunes = primaryStyle.slots.map((slot) => {
    return slot.runes[Math.floor(Math.random() * slot.runes.length)];
  });

  let secondaryLesserRunes: any[] = [];

  if (subStyle && subStyle.slots.length > 0) {
    const randomIndices = [1, 2, 3];

    randomIndices.forEach((i) => {
      const slot = subStyle.slots[i];
      if (slot && slot.runes.length > 0 && secondaryLesserRunes.length < 2) {
        secondaryLesserRunes.push(
          slot.runes[Math.floor(Math.random() * slot.runes.length)]
        );
      }
      return undefined;
    });
  }

  console.log(secondaryLesserRunes);

  const subLesserRunes = secondaryLesserRunes.filter(
    (rune) => rune !== undefined
  );

  const runeObj: Runes = {
    statPerks: {
      defense: 5002,
      flex: 5008,
      offense: 5008,
    },
    styles: [
      {
        description: "primaryStyle",
        selections: primaryLesserRunes.map((rn) => {
          return { perk: rn.id, var1: 0, var2: 0, var3: 0 };
        }),
        style: primaryStyle.id,
      },
      {
        description: "subStyle",
        selections: subLesserRunes.map((rn) => {
          return { perk: rn.id, var1: 0, var2: 0, var3: 0 };
        }),
        style: subStyle.id,
      },
    ],
  };

  return runeObj;
};
