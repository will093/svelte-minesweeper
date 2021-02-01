import Header from '../components/Header.svelte';

export default {
  title: 'MineSweeper/Header',
  component: Header,
  argTypes: {
    timeElapsed: {
      control: { type: 'select', options: [0, 10, 100, 6789] },
    },
    remainingFlags: {
      control: { type: 'select', options: [-1, 0, 1, 10, 234] },
    },
  },
};

const Template = ({ onClick, ...args }) => ({
  Component: Header,
  props: args,
});

export const Initial = Template.bind({});
Initial.args = {
  timeElapsed: 0,
  remainingFlags: 10,
};

export const ZeroFlags = Template.bind({});
ZeroFlags.args = {
  timeElapsed: 100,
  remainingFlags: 0,
};

export const NegativeFlags = Template.bind({});
NegativeFlags.args = {
  timeElapsed: 100,
  remainingFlags: -1,
};

export const LargeTimeAndFlags = Template.bind({});
LargeTimeAndFlags.args = {
  timeElapsed: 6789,
  remainingFlags: 234,
};