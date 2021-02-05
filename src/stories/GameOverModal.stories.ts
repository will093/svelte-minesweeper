import GameOverModal from '../components/GameOverModal.svelte';
import DimensionsDecorator from './decorators/DimensionsDecorator.svelte';

export default {
  title: 'MineSweeper/GameOverModal',
  component: GameOverModal,
  decorators:  [(storyFn) => {
    const story = storyFn();

    return {
      Component: DimensionsDecorator,
      props: {
        child: story.Component,
        props: story.props,
        width: '20rem',
        height: '20rem',
      }
    }
  }],
  argTypes: {

  },
};

const Template = ({ onClick, ...args }) => ({
  Component: GameOverModal,
  props: args,
});

export const Win = Template.bind({});
Win.args = {
  gameOver: { win: true }
};

export const Lose = Template.bind({});
Lose.args = {
  gameOver: { win: false }
};
