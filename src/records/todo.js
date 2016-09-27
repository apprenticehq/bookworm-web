// @flow

import { Record } from 'immutable';

const TodoRecord = Record({
  id: undefined,
  complete: undefined,
  text: undefined,
});

export default class Todo extends TodoRecord {
  id: number;
  complete: boolean;
  text: string;

  constructor(text: string): void {
    if (typeof text !== 'string') throw new Error('Should input text: string to initialize this.');

    super({
      id: Date.now() + Math.round(Math.random() * 1000),
      complete: false,
      text,
    });
  }
}
