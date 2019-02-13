import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TodoItem, TodoList } from './models';


// this is a stateful service. Angular has to provide the service
@Injectable() // this is needed if constructor accepts a parameter
export class TodoDataService {
  private count = 99;
// faking data
private data: TodoList = {
  items: [
    { id: '1', description: 'Shovel Snow', completed: false },
    { id: '2', description: 'Change Oil', completed: true },
  ]
};

private subject: BehaviorSubject<TodoList>;
constructor() {
  this.subject = new BehaviorSubject<TodoList>(this.data); // this is how we tell what the subject is
}

getList(): TodoList {
  return { ...this.data};
}

// you can ask subject to create obser of itself
getListAsObservable(): Observable<TodoList> {
    return this.subject.asObservable();
}

addTodoItem(description: string) {
  const itemToAdd: TodoItem = {
    description,
    completed: false,
    id: (this.count++).toString()
  };
  this.data.items = [itemToAdd, ...this.data.items];
  // let everyone know that is observing this data a new "issue" of the data is available
  this.subject.next(this.data);
}
}
