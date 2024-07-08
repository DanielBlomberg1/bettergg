import { Continent } from "../types/continent";
import { Region } from "../types/region";

export const getContinentFromRegion = (region: Region): Continent => {
  if (
    region === "BR1" ||
    region === "LA1" ||
    region === "LA2" ||
    region === "NA1" ||
    region === "OC1"
  ) {
    return "AMERICAS";
  } else if (
    region === "EUN1" ||
    region === "EUW1" ||
    region === "RU" ||
    region === "TR1"
  ) {
    return "EUROPE";
  } else return "ASIA";
};
