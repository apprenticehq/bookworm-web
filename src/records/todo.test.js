import { Record } from 'immutable';
import Todo from './todo';

describe('Todo', () => {
  let todo;

  beforeEach(() => {
    todo = new Todo('todo');
  });

  it('should define a constructor', () => {
    expect(todo instanceof Record).toBe(true);
    expect(todo instanceof Todo).toBe(true);
  });

  it('should match declared types with properties', () => {
    expect(typeof todo.id).toBe('number');
    expect(typeof todo.complete).toBe('boolean');
    expect(typeof todo.text).toBe('string');
  });

  it('should throw if initialize method does not receive text', () => {
    expect(() => new Todo()).toThrow();
  });
});
