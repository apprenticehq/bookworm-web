// @flow

import { Dispatcher } from 'flux';

const instance: Dispatcher<Object> = new Dispatcher();
export default instance;
export const dispatch = instance.dispatch.bind(instance);
