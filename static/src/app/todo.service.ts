import {Injectable} from '@angular/core';
import {Todo} from "./todo";

@Injectable()
export class TodoService {
  todos = [new Todo("todo 1"), new Todo("todo 2")];

  constructor() {
  }

  create(todo: Todo) {
    this.todos.push(todo);
  }
}
