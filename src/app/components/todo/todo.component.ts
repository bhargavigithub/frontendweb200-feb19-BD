import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoList } from './models';
import { TodoDataService } from './todo-data.service';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  // stuff: TodoList = {
  //   items: [
  //     { id: '1', description: 'Shovel Snow', completed: false },
  //     { id: '2', description: 'Change Oil', completed: true },
  //   ]
  // };
  // instead do it as below
  // stuff: TodoList;// make this is observable of todo list as shown below
  stuff: Observable<TodoList>;
  // constructor() { }
  constructor(private service: TodoDataService) {
    // this.stuff = service.getlistas(); //change this to call observable
    this.stuff = service.getListAsObservable();
  }

  ngOnInit() {
  }

  // addNewItem(description: string) {
  //   const itemToAdd: TodoItem = {
  //     description,
  //     completed: false,
  //     id: '99'
  //   };
  addNewItem(description: string) {
    this.service.addTodoItem(description);
    this.stuff = this.service.getListAsObservable();
  }

  //   this.stuff.items = [itemToAdd, ... this.stuff.items];
  // }

}
