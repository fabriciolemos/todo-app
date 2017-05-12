import {Component, OnInit} from '@angular/core';
import {TodoService} from "../todo.service";
import {Todo} from "../todo";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private heroService: TodoService) {
  }

  ngOnInit() {
  }

  createTodo(description: string) {
    this.heroService.create(new Todo(description));
  }
}
