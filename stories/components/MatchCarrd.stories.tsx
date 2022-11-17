import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MatchCardContents } from "../../components/Summoner/MatchCardContents";

export default {
  title: "MatchCard",
  component: MatchCardContents,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    kda: { control: "number" },
    gameversion: { control: "text" },
    playerWon: { control: "boolean" },
    playedChampion: { control: "text" },
    playedRole: { control: "text" },
  },
} as ComponentMeta<typeof MatchCardContents>;

const Template: ComponentStory<typeof MatchCardContents> = (args) => (
  <MatchCardContents {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  gameversion: "12.21.1",
  playerWon: true,
  playedChampion: "Aatrox",
  playedRole: "TOP",
  kills: 10,
  deaths: 2,
  assists: 5,
};

export const Secondary = Template.bind({});
Secondary.args = {
  gameversion: "12.21.1",
  playerWon: false,
  playedChampion: "KogMaw",
  playedRole: "MID",
  kills: 2,
  deaths: 17,
  assists: 10,
};
