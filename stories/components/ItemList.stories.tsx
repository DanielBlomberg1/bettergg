import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IItem, ItemListHorizontal } from "../../components/Itemlist/ItemList";

export default {
  title: "components/ItemList",
  component: ItemListHorizontal,
  argTypes: {
    items: { control: "array" },
    gameVersion: { control: "text" },
  },
} as ComponentMeta<typeof ItemListHorizontal>;

const Template: ComponentStory<typeof ItemListHorizontal> = (args) => (
  <ItemListHorizontal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  items: [{ id: 3157 }, { id: 6655 }, { id: 3102 }] as IItem[],
  gameVersion: "12.21.1",
  rows: 3,
};

export const Secondary = Template.bind({});
Secondary.args = {
  items: [
    { id: 6655 },
    { id: 2052 },
    { id: 3020 },
    { id: 6655 },
    { id: 2052 },
    { id: 3020 },
  ] as IItem[],
  gameVersion: "12.21.1",
  rows: 2,
};
