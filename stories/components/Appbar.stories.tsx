import { ComponentMeta, ComponentStory } from "@storybook/react";
import Appbar from "../../components/Appbar/Appbar";

export default {
  title: "components/Appbar",
  component: Appbar,
  argTypes: {},
} as ComponentMeta<typeof Appbar>;

const Template: ComponentStory<typeof Appbar> = (args) => <Appbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  //items: [{ id: 3157 }, { id: 6655 }, { id: 3102 }] as IItem[],
  //gameVersion: "12.21.1",
  //rows: 3,
};
