import GameGrid from '../components/GameGrid.svelte';
import { CellState } from '../enum/cell-state.enum';

export default {
  title: 'MineSweeper/GameGrid',
  component: GameGrid,
  argTypes: {

  },
};

const Template = ({ onClick, ...args }) => ({
  Component: GameGrid,
  props: args,
});

const randomCellValue = () => {
  const values = [0,1,2,3,4,5,6,7,8,'m'];
  return values[Math.floor(Math.random() * values.length)];
}

const randomCellState = () => {
  const values = ['covered', 'uncovered', 'flagged'];
  return values[Math.floor(Math.random() * values.length)];
}

const covered = () => ({
  state: 'covered',
  value: 0,
});

const uncovered = () => ({
  state: 'uncovered',
  value: randomCellValue(),
});

const random = () => ({
  state: randomCellState(),
  value: randomCellValue(),
});

export const Initial = Template.bind({});
Initial.args = {
  gridRows: Array(10).fill(Array(10).fill(covered()))
};

export const Random = Template.bind({});
Random.args = {
  gridRows: Array(10).fill(Array(10).fill(0)).map(row => row.map(random))
};

export const LargeRandom = Template.bind({});
LargeRandom.args = {
  gridRows: Array(20).fill(Array(20).fill(0)).map(row => row.map(random))
};

export const Real = Template.bind({});
Real.args = {
  gridRows: [
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