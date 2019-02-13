import { Action } from '@ngrx/store';
import { TodoEntity } from '../reducers/todos.reducer';
// ngrxa tab
let id = 99;
export const ADD_TODO = '[todosFeature] add todo';
export class TodoAdded implements Action {
  readonly type = ADD_TODO ;
  payload: TodoEntity;
  constructor(description: string) {
    this.payload = {
      description,
      id: 'T' + (id++)
    };
  }
}
// http://www.typescriptlang.org/docs/handbook/advanced-types.html
export type All = TodoAdded;
