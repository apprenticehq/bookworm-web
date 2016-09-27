// @flow

declare module 'actions' {
  declare type TodoAction =
    {
      type: 'todo/complete',
      id: string,
    } |
    {
      type: 'todo/create',
      text: string,
    } |
    {
      type: 'todo/destroy',
      id: string,
    } |
    {
      type: 'todo/destroy-compoeted',
    } |
    {
      type: 'todo/toggle-complete-all',
    } |
    {
      type: 'todo/undo-complete',
      id: string,
    } |
    {
      type: 'todo/update-text',
      id: string,
      text: string,
    };
}
