import GameGrid from '../components/GameGrid.svelte';
import { CellState } from '../enum/cell-state.enum';
import { coveredGrid, randomGrid } from './helpers/helpers';
import DimensionsDecorator from './decorators/DimensionsDecorator.svelte';

export default {
  title: 'MineSweeper/GameGrid',
  component: GameGrid,
  decorators:  [(storyFn) => {
    const story = storyFn();

    return {
      Component: DimensionsDecorator,
      props: {
        child: story.Component,
        props: story.props,
        width: '35rem',
      }
    }
  }],
  argTypes: {

  },
};

const Template = ({ onClick, ...args }) => ({
  Component: GameGrid,
  props: args,
});

export const Initial = Template.bind({});
Initial.args = {
  grid: coveredGrid(10),
};

export const Random = Template.bind({});
Random.args = {
  grid: randomGrid(10),
};

export const LargeRandom = Template.bind({});
LargeRandom.args = {
  grid: randomGrid(15),
};

export const Real = Template.bind({});
Real.args = {
  grid: [
    [
      {
        state: CellState.Flagged,
        value: 'm'
      },
      {
        state: CellState.Uncovered,
        value: 2
      },
      {
        state: CellState.Covered,
        value: 1
      },
      {
        state: CellState.Covered,
        value: 1
      }
    ],
    [
      {
        state: CellState.Uncovered,
        value: 1
      },
      {
        state: CellState.Uncovered,
        value: 3
      },
      {
        state: CellState.Covered,
        value: 'm'
      },
      {
        state: CellState.Covered,
        value: 2
      }
    ],
    [
      {
        state: CellState.Uncovered,
        value: 0
      },
      {
        state: CellState.Uncovered,
        value: 2
      },
      {
        state: CellState.Covered,
        value: 'm'
      },
      {
        state: CellState.Covered,
        value: 2
      }
    ],
    [
      {
        state: CellState.Uncovered,
        value: 0
      },
      {
        state: CellState.Uncovered,
        value: 1
      },
      {
        state: CellState.Uncovered,
        value: 1
      },
      {
        state: CellState.Uncovered,
        value: 1
      },
    ]
  ]
};