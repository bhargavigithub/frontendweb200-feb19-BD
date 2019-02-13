import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoListItem } from '../models';
import * as fromMessage from './messages.reducer';
import * as fromTodos from './todos.reducer';

export interface TodosState {
message: fromMessage.State;
todos: fromTodos.State;
} // same thing we did in app module

export const reducers = {
message: fromMessage.reducer,
todos: fromTodos.reducer
};
// 1. create a feature selector
const selectorTodoFeature = createFeatureSelector<TodosState>('todosFeature');

// 2. Create a selector for each Branch of the Feature
const selectMessage = createSelector(selectorTodoFeature, f => f.message);
const selectTodos = createSelector(selectorTodoFeature, f => f.todos);

// 3. Create any "helpers" you might need (optional)
const {selectAll: selectTodosEntityArray} = fromTodos.adapter.getSelectors(selectTodos);
// 4. Create a selector for what the component needs.


export const selectHeaderMessage = createSelector(selectMessage, m => m.heading);
export const selectGreeting = createSelector(selectMessage, b => b.greeting);
export const selectTodoListItems = createSelector(selectTodosEntityArray, t => t.map(x => x as TodoListItem));
// select is a function that takes a function as argument. It is a higher order function
