import { IItem } from "../components/Itemlist/ItemList";
import items from "./item.json";

export const generateRandomItemIds = (howMany: number): IItem[] => {
  const itemIds = [];
  for (let i = 0; i < howMany; i++) {
    const randomItem = Object.keys(items.data)[
      Math.floor(Math.random() * Object.keys(items.data).length)
    ];
    itemIds.push({ id: parseInt(randomItem) });
  }
  return itemIds;
};
