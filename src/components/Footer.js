// @flow

import type Todo from '../records/todo';

import React, { Component, Element, PropTypes } from 'react';
import { Map } from 'immutable';
import { dispatch } from '../Dispatcher';

type Props = {
  todos: Map<number, Todo>,
};

export default class Footer extends Component<void, Props, void> {
  static propTypes = {
    todos: PropTypes.instanceOf(Map),
  };

  handleClearCompletedClick(): void {
    dispatch({ type: 'todo/destroy-completed' });
  }

  render(): ?Element<*> {
    const { todos } = this.props;

    if (todos.size === 0) {
      return null;
    }

    const completed = todos.reduce((x, todo) => todo.complete ? x + 1 : x, 0);
    const itemsLeft = todos.size - completed;
    const itemsLeftPhrase = itemsLeft === 1 ? ' item left' : ' items left';

    let clearCompletedButton;
    if (completed > 0) {
      clearCompletedButton = (
        <button
          id="clear-completed"
          onClick={this.handleClearCompletedClick}
        >
          Clear completed ({completed})
        </button>
      );
    }

    return (
      <footer id="footer">
        <span id="todo-count">
          <strong>
            {itemsLeft}
          </strong>
          {itemsLeftPhrase}
        </span>
        {clearCompletedButton}
      </footer>
    );
  }
}
