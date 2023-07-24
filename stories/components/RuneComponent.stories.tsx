import { ComponentMeta, ComponentStory } from "@storybook/react";
import RuneComponent from "../../components/RuneComponent/RuneComponent";

export default {
  title: "components/RuneComponent",
  component: RuneComponent,
  argTypes: { runes: { control: "object" } },
} as ComponentMeta<typeof RuneComponent>;

const Template: ComponentStory<typeof RuneComponent> = (args) => (
  <RuneComponent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  rune: {
    statPerks: {
      defense: 5002,
      flex: 5008,
      offense: 5008,
    },
    styles: [
      {
        description: "primaryStyle",
        selections: [
          {
            perk: 8369,
            var1: 2159,
            var2: 1857,
            var3: 0,
          },
          {
            perk: 8304,
            var1: 11,
            var2: 1,
            var3: 5,
          },
          {
            perk: 8345,
            var1: 3,
            var2: 0,
            var3: 0,
          },
          {
            perk: 8347,
            var1: 0,
            var2: 0,
            var3: 0,
          },
        ],
        style: 8300,
      },
      {
        description: "subStyle",
        selections: [
          {
            perk: 8236,
            var1: 28,
            var2: 0,
            var3: 0,
          },
          {
            perk: 8226,
            var1: 250,
            var2: 2102,
            var3: 0,
          },
        ],
        style: 8200,
      },
    ],
  },
};
