import GameGridCell from '../components/GameGridCell.svelte';
import { CellState } from '../enum/cell-state.enum';
import DimensionsDecorator from './decorators/DimensionsDecorator.svelte';

export default {
  title: 'MineSweeper/GameGridCell',
  component: GameGridCell,
  decorators:  [(storyFn) => {
    const story = storyFn();

    return {
      Component: DimensionsDecorator,
      props: {
        child: story.Component,
        props: story.props,
        width: '3rem',
      }
    }
  }],
  argTypes: {
    state: {
      control: { type: 'select', options: ['covered', 'flagged', 'uncovered'] },
    },
    value: {
      control: { type: 'select', options: [0,1,2,3,4,5,6,7,8,'m'] },
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

export const Two = Template.bind({});
Two.args = {
  state: 'uncovered',
  value: 2,
};


export const Three = Template.bind({});
Three.args = {
  state: 'uncovered',
  value: 3,
};


export const Four = Template.bind({});
Four.args = {
  state: 'uncovered',
  value: 4,
};


export const Five = Template.bind({});
Five.args = {
  state: 'uncovered',
  value: 5,
};


export const Six = Template.bind({});
Six.args = {
  state: 'uncovered',
  value: 6,
};


export const Seven = Template.bind({});
Seven.args = {
  state: 'uncovered',
  value: 7,
};


export const Eight = Template.bind({});
Eight.args = {
  state: 'uncovered',
  value: 8,
};

export const Mine = Template.bind({});
Mine.args = {
  state: 'uncovered',
  value: 'm',
};

export const MineExploded = Template.bind({});
MineExploded.args = {
  state: CellState.Exploded,
  value: 'm',
};