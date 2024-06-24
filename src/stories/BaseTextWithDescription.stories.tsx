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
    description: 'Hello world',
    title: 'Title',
  },
} as ComponentMeta<typeof BaseTextWithDescription>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseTextWithDescription> = (args) => <BaseTextWithDescription {...args} />;

export const Default = Template.bind({});
