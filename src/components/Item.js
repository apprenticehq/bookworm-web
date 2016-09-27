// @flow

import React, { Component, Element, PropTypes } from 'react';
import classnames from 'classnames';
import { dispatch } from '../Dispatcher';
import Todo from '../records/todo';
import TextInput from './TextInput';

type Props = {
  todo: Todo,
};

type State = {
  isEditing: boolean,
};

export default class Item extends Component<void, Props, State> {
  static propTypes = {
    todo: PropTypes.instanceOf(Todo),
  };

  state: State = {
    isEditing: false,
  };

  handleChange = (): void => {
    const { todo } = this.props;
    if (todo.complete) {
      dispatch({
        type: 'todo/undo-complete',
        id: todo.id,
      });
    } else {
      dispatch({
        type: 'todo/complete',
        id: todo.id,
      });
    }
  }

  handleClick = (): void => {
    const { todo } = this.props;
    dispatch({
      type: 'todo/destroy',
      id: todo.id,
    });
  }

  handleDoubleClick = (): void => {
    this.setState({ isEditing: true });
  }

  handleSave = (text: string): void => {
    const { todo } = this.props;
    dispatch({
      type: 'todo/update-text',
      id: todo.id,
      text,
    });
    this.setState({ isEditing: false });
  }

  render(): ?Element<*> {
    const { todo } = this.props;

    let input;
    if (this.state.isEditing) {
      input = (
        <TextInput
          className="edit"
          onSave={this.handleSave}
          value={todo.text}
        />
      );
    }

    return (
      <li
        className={classnames({
          'completed': todo.complete,
          'editing': this.state.isEditing,
        })}
        key={todo.id}
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.complete}
            onChange={this.handleChange}
          />
          <label onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </label>
          <button className="destroy" onClick={this.handleClick} />
        </div>
        {input}
      </li>
    );
  }
}
