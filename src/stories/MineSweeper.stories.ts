import MineSweeper from '../components/MineSweeper.svelte';
import { coveredGrid, randomGrid } from './helpers/helpers';
import DimensionsDecorator from './decorators/DimensionsDecorator.svelte';

export default {
  title: 'MineSweeper/MineSweeper',
  component: MineSweeper,
  decorators:  [(storyFn) => {
    const story = storyFn();

    return {
      Component: DimensionsDecorator,
      props: {
        child: story.Component,
        props: story.props,
        width: '25rem',
      }
    }
  }],
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