import { Injectable } from "@angular/core";
import { 
  HttpClient, 
  HttpHeaders, 
} from "@angular/common/http";

import { 
  Observable, 
  of, 
} from "rxjs";
import { 
  catchError,
  tap,
} from 'rxjs/operators';

interface ITodo {
  text: string;
  status: boolean;
  createdOn: string;
}

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  baseUrl: string = 'http://localhost:8080';

  endpoint: {
    todos: "todos",
    todo: "todo"
  };

  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json' 
    }),
  };

  constructor(
    private http: HttpClient,
  ) {}
  
  /* GET list todos */
  getTodos(): Observable<ITodo[]> {
    const fullAPI: string = `${this.baseUrl}/${this.endpoint.todos}`;

    return this.http.get<ITodo[]>(fullAPI).pipe(
      catchError(this.handleError<ITodo[]>('getTodos', []))
    );
  }

  /* POST create a todo */
  createTodo(todo: ITodo): Observable<ITodo> {
    const fullAPI: string = `${this.baseUrl}/${this.endpoint.todos}`;

    return this.http.post<ITodo>(fullAPI, todo, this.httpOptions)
    .pipe(
      tap((todo: ITodo) => {
          // show message
      }),
      catchError(this.handleError<ITodo>('createTodo'))
    );
  }

  /* PUT Update a todo*/
  updateTodo(todo: ITodo): any {
    const fullAPI: string = `${this.baseUrl}/${this.endpoint.todo}`;

    return this.http.put(fullAPI, todo, this.httpOptions).pipe(
      tap(_ => {
        // show log
      }),
      catchError(this.handleError<any>('updateTodo'))
    );

  }

  /* DELETE a todo */
  deleteTodo(todo: ITodo): Observable<ITodo> {
    const fullAPI: string = `${this.baseUrl}/${this.endpoint.todo}`;

    return this.http.delete<ITodo>(fullAPI, this.httpOptions)
    .pipe(
      tap(_ => {
        // show toast
      }),
      catchError(this.handleError<ITodo>('deleteHero'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

    
        return of(result as T);
      };
    }

  }