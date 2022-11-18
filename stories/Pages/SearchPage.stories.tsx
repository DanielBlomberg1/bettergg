import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchPage from "../../pages/search";

export default {
  title: "pages/SearchPage",
  component: SearchPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SearchPage>;

const Template: ComponentStory<typeof SearchPage> = (args) => <SearchPage />;

export const Primary = Template.bind({});
Primary.args = {
  /* the args you need here will depend on your component */
};
