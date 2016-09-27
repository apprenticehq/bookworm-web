// @flow

import type { Map } from 'immutable';
import type { Store } from 'flux/utils';
import type Todo from './records/todo';

import React, { Component, Element } from 'react';
import { Container } from 'flux/utils';
import TodoStore from './stores/todos';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

type State = {
  todos: Map<number, Todo>,
  areAllComplete: boolean,
};

class TodoApp extends Component<void, void, State> {
  static getStores(): Array<Store> {
    return [TodoStore];
  }

  static calculateState(prevState: ?State): State {
    return {
      todos: TodoStore.getState(),
      areAllComplete: TodoStore.areAllComplete(),
    };
  }

  state: State;

  render(): ?Element<*> {
    return (
      <div>
        <Header />
        <MainSection
          todos={this.state.todos}
          areAllComplete={this.state.areAllComplete}
        />
        <Footer todos={this.state.todos} />
      </div>
    );
  }
}

const TodoAppContainer = Container.create(TodoApp);
export default TodoAppContainer;
