import MineSweeper from '../components/MineSweeper.svelte';
import { coveredGrid, randomGrid } from './helpers/helpers';
import WidthDecorator from './decorators/WidthDecorator.svelte';

export default {
  title: 'MineSweeper/MineSweeper',
  component: MineSweeper,
  decorators:  [(storyFn) => {
    const story = storyFn();

    return {
      Component: WidthDecorator,
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