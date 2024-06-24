/* eslint-disable import/no-extraneous-dependencies */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Slider } from '../components/slider/Slider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Slider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// @ts-ignore
const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Default = Template.bind({});
