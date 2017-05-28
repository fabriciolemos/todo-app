import {Component, OnInit} from '@angular/core';
import {Todo} from "../todo";
import {TodoService} from "../todo.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Observable<Todo[]>;

  constructor(private heroService: TodoService) {
  }

  ngOnInit(): void {
    this.getTodos();
  }

  private getTodos() {
    this.todos = this.heroService.getTodos();
    // this.heroService.getTodos().then(todos => this.todos = todos);
  }

  createTodo(description: string) {
    this.heroService.create(new Todo(description)).then(todo => this.getTodos());
  }

}
