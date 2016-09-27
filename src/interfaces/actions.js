// @flow

declare module 'actions' {
  declare type TodoAction =
    {
      type: 'todo/complete',
      id: number,
    } |
    {
      type: 'todo/create',
      text: string,
    } |
    {
      type: 'todo/destroy',
      id: number,
    } |
    {
      type: 'todo/destroy-compoeted',
    } |
    {
      type: 'todo/toggle-complete-all',
    } |
    {
      type: 'todo/undo-complete',
      id: number,
    } |
    {
      type: 'todo/update-text',
      id: number,
      text: string,
    };
}
