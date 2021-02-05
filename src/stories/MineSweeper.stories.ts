import MineSweeper from '../components/MineSweeper.svelte';
import { coveredGrid, randomGrid } from './helpers/helpers';

export default {
  title: 'MineSweeper/MineSweeper',
  component: MineSweeper,
  argTypes: {
  },
};

const Template = ({ onClick, ...args }) => ({
  Component: MineSweeper,
  props: args,
});

export const InitialGame = Template.bind({});
InitialGame.args = {
  gameGrid: coveredGrid(10),
  remainingFlags: 10,
};

export const RandomGame = Template.bind({});
RandomGame.args = {
  gameGrid: randomGrid(10),
  remainingFlags: 10,
};

export const LargeRandomGame = Template.bind({});
LargeRandomGame.args = {
  gameGrid: randomGrid(25),
  remainingFlags: 100,
};


export const GameOverWin = Template.bind({});
GameOverWin.args = {
  gameOver: { win: true },
  gameGrid: randomGrid(10),
  remainingFlags: 0,
};

export const GameOverLose = Template.bind({});
GameOverLose.args = {
  gameOver: { win: false },
  gameGrid: randomGrid(10),
  remainingFlags: 0,
};