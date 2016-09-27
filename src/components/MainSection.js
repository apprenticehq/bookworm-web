// @flow

import type Todo from '../records/Todo';

import React, { Component, Element, PropTypes } from 'react';
import { Map } from 'immutable';
import { dispatch } from '../Dispatcher';
import Item from './Item';

type Props = {
  todos: Map<number, Todo>,
  areAllComplete: boolean,
};

export default class MainSection extends Component<void, Props, void> {
  static propTypes = {
    areAllComplete: PropTypes.bool,
    todos: PropTypes.instanceOf(Map),
  }

  handleChange(): void {
    dispatch({ type: 'todo/toggle-complete-all' });
  }

  render(): ?Element<*> {
    const { todos, areAllComplete } = this.props;

    if (todos.size === 0) {
      return null;
    }

    const todoItems = [];
    todos.forEach((todo) => {
      todoItems.push(<Item key={todo.id} todo={todo} />);
    });

    return (
      <section id="main">
        <input
          id="toggle-all"
          type="checkbox"
          onChange={this.handleChange}
          checked={areAllComplete ? 'checked' : ''}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul id="todo-list">{todoItems}</ul>
      </section>
    );
  }
}
