// @flow

import React, { Component, Element } from 'react';
import { dispatch } from '../Dispatcher';
import TextInput from './TextInput';

export default class Header extends Component<void, any, void> {
  handleSave = (text: string): void => {
    if (text.trim()) {
      dispatch({
        type: 'todo/create',
        text,
      });
    }
  }

  render(): ?Element<*> {
    return (
      <header id="header">
        <h1>Todos</h1>
        <TextInput
          id="new-todo"
          placeholder="What needs to be done?"
          onSave={this.handleSave}
        />
      </header>
    );
  }
}
