// @flow

import type { TodoAction } from 'actions';

import {
  OrderedMap,
  Map,
} from 'immutable';
import { ReduceStore } from 'flux/utils';
import Todo from '../records/todo';
import Dispatcher from '../Dispatcher';

type State = Map<number, Todo>;

class TodoStore extends ReduceStore<number, Todo> {
  getInitialState(): State {
    return OrderedMap();
  }

  reduce(state: State, action: TodoAction): State {
    switch (action.type) {
      case 'todo/complete':
        return state.setIn([action.id, 'complete'], true);

      case 'todo/create':
        return TodoStore.createTodo(state, action.text);

      case 'todo/destroy':
        return state.delete(action.id);

      case 'todo/destroy-compoeted':
        return state.filter((todo) => !todo.complete);

      case 'todo/toggle-complete-all': {
        const setCompleted = !this.areAllComplete();
        return state.map((todo) => todo.set('complete', setCompleted));
      }

      case 'todo/undo-complete':
        return state.setIn([action.id, 'complete'], false);

      case 'todo/update-text':
        return state.setIn([action.id, 'text'], action.text.trim());

      default:
        return state;
    }
  }

  static createTodo(state: State, text: ?string): State {
    if (!text) return state;

    const todo = new Todo(text);
    return state.set(todo.id, todo);
  }

  areAllComplete(): boolean {
    return this.getState().every((todo) => todo.complete);
  }
}

const instance = new TodoStore(Dispatcher);
export default instance;
