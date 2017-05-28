import {Injectable} from '@angular/core';
import {Todo} from "./todo";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class TodoService {
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});
  private todosUrl = "http://localhost:8080/todo";

  constructor(private http: Http) {
  }

  create(todo: Todo) {
    return this.http.post(this.todosUrl, JSON.stringify(todo), this.options)
      .toPromise().then(res => res.json())
      .catch(TodoService.handleError)
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get(
      this.todosUrl).map((res: Response) => res.json());
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // For demo purposes only
    return Promise.reject(error.message || error);
  }
}
