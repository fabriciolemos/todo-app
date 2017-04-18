import {Component, OnInit} from '@angular/core';
import {Todo} from "../todo";

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  todos = [new Todo("todo 1"), new Todo("todo 2")];

  constructor() {
  }

  ngOnInit() {
  }

}
