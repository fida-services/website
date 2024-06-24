/* eslint-disable import/no-extraneous-dependencies */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BaseTextWithDescription } from '../components/_common/BaseTextWithDescription';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/BaseTextWithDescription',
  component: BaseTextWithDescription,
  parameters: {
    layout: 'centered',
  },
  args: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    title: 'Title',
  },
} as ComponentMeta<typeof BaseTextWithDescription>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseTextWithDescription> = (args) => <BaseTextWithDescription {...args} />;

export const Default = Template.bind({});
