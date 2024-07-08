import { queueType } from "../types/queuetype";

export const leagueQueueTypeIntoName = (queueType: queueType) => {
  switch (queueType) {
    case "RANKED_SOLO_5x5":
      return "Ranked Solo/Duo";
    case "RANKED_FLEX_SR":
      return "Ranked Flex";
    case "RANKED_FLEX_TT":
      return "Ranked Flex 3v3";
    case "RANKED_TFT":
      return "Ranked Teamfight Tactics";
    case "RANKED_TT":
      return "Ranked 3v3";
    case "RANKED_FLEX_5x5":
      return "Ranked Flex 5v5";
    case "RANKED_FLEX_3x3":
      return "Ranked Flex 3v3";
    case "RANKED_TFT_TURBO":
      return "Ranked Teamfight Tactics Turbo";
    case "RANKED_TFT_STANDARD":
      return "Ranked Teamfight Tactics Standard";
    case "RANKED_TFT_DRAFT":
      return "Ranked Teamfight Tactics Draft";
    case "RANKED_TFT_CLASH":
      return "Ranked Teamfight Tactics Clash";
    case "RANKED_TFT_RANKED":
      return "Ranked Teamfight Tactics Ranked";
    case "RANKED_TFT_TURBO_CLASH":
      return "Ranked Teamfight Tactics Turbo Clash";
    case "RANKED_TFT_STANDARD_CLASH":
      return "Ranked Teamfight Tactics Standard Clash";
    case "RANKED_TFT_DRAFT_CLASH":
      return "Ranked Teamfight Tactics Draft Clash";
    case "RANKED_TFT_RANKED_CLASH":
      return "Ranked Teamfight Tactics Ranked Clash";
    case "RANKED_TFT_TURBO_5x5":
      return "Ranked Teamfight Tactics Turbo 5v5";
    case "RANKED_TFT_STANDARD_5x5":
      return "Ranked Teamfight Tactics Standard 5v5";
    case "RANKED_TFT_DRAFT_5x5":
      return "Ranked Teamfight Tactics Draft 5v5";
    case "RANKED_TFT_RANKED_5x5":
      return "Ranked Teamfight Tactics Ranked 5v5";
    case "RANKED_TFT_TURBO_3x3":
      return "Ranked Teamfight Tactics Turbo 3v3";
    case "RANKED_TFT_STANDARD_3x3":
      return "Ranked Teamfight Tactics Standard 3v3";
    default:
      return "Unknown Queue Type";
  }
};
