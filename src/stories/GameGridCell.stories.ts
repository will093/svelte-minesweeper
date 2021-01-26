import GameGridCell from '../components/GameGridCell.svelte';

export default {
  title: 'MineSweeper/GameGridCell',
  component: GameGridCell,
  argTypes: {
    state: {
      control: { type: 'select', options: ['covered', 'flagged', 'uncovered'] },
    },
    value: {
      control: { type: 'select', options: [0,1,2,3,4,5,6,7,8,9,'m'] },
    },
  },
};

const Template = ({ onClick, ...args }) => ({
  Component: GameGridCell,
  props: args,
});

export const Covered = Template.bind({});
Covered.args = {
  state: 'covered',
  value: 1,
};

export const Flagged = Template.bind({});
Flagged.args = {
  state: 'flagged',
  value: 1,
};

export const Zero = Template.bind({});
Zero.args = {
  state: 'uncovered',
  value: 0,
};

export const One = Template.bind({});
One.args = {
  state: 'uncovered',
  value: 1,
};

export const Mine = Template.bind({});
Mine.args = {
  state: 'uncovered',
  value: 'm',
};