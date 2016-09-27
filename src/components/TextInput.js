// @flow

import React, { Component, Element, PropTypes } from 'react';

const EnterKeyCode = 13;

type Props = {
  className?: ?string,
  id?: ?string,
  placeholder?: ?string,
  value?: string,
  onSave: (text: string) => void,
};

type State = {
  value: string,
};

export default class TextInput extends Component<void, Props, State> {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    onSave: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
  }

  state: State = {
    value: this.props.value || '',
  };

  handleSave = (): void => {
    this.props.onSave(this.state.value);
    this.setState({ value: '' });
  }

  handleOnChange = (event: any): void => {
    this.setState({ value: event.target.value });
  }

  handleOnKeyDown = (event: any): void => {
    if (event.keyCode === EnterKeyCode) {
      this.handleSave();
    }
  }

  render(): ?Element<*> {
    return (
      <input
        className={this.props.className}
        id={this.props.id}
        placeholder={this.props.placeholder}
        onBlur={this.handleSave}
        onChange={this.handleOnChange}
        onKeyDown={this.handleOnKeyDown}
        value={this.state.value}
        autoFocus={true}
      />
    );
  }
}
