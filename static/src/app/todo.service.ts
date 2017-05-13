import {Injectable} from '@angular/core';
import {Todo} from "./todo";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {
  todosUrl = "http://localhost:8080/todo";
  todos: Todo[];

  constructor(private http: Http) {
    this.getTodos();
  }

  create(todo: Todo) {
    return this.http.post(this.todosUrl, todo).toPromise().then(res => res.json()).catch(this.handleError)
  }

  getTodos() {
    return this.http.get(
      this.todosUrl).toPromise()
      .then(response => this.todos = response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // For demo purposes only
    return Promise.reject(error.message || error);
  }

}
