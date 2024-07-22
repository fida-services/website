/* eslint-disable import/no-extraneous-dependencies */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from '../components/_common/Text';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    fontFamily: 'Satoshi-Variable',
    fontWeight: 400,
    label: 'Hello world',
    size: 2,
    hoverTransition: false,
    lineHeight: 1.5,
    noTextWrap: false,
    textPlacing: 'center',
    isRoseText: false,
    toUpperCase: false,
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
    fontFamily: {
      control: {
        type: 'select',
        options: ['Inter', 'Satoshi-Variable'],
      },
    },
    textPlacing: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
    },
    fontWeight: {
      control: {
        type: 'select',
        options: ['normal', 'bold', 'bolder', 'lighter', 100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});

export const WithRoseText = Template.bind({});
WithRoseText.args = {
  label: 'Hello <rose>World</rose>',
  isRoseText: true,
};
