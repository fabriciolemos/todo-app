import {Component, OnInit} from '@angular/core';
import {Todo} from "../todo";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  todos: Todo[];

  constructor(private heroService: HeroService) {
    this.todos = heroService.todos;
  }

  ngOnInit() {
  }

}
