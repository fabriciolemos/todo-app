import {Component, OnInit} from '@angular/core';
import {Todo} from "../todo";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  todos: Todo[];

  constructor(private heroService: TodoService) {
    heroService.getTodos().then(todos => this.todos = todos);
  }

  ngOnInit() {
  }

}
