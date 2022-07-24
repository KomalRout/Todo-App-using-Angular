import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TODO } from './todo';
import { map } from 'rxjs/operators';
@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {}
  private path = 'api/toDo';

  httpOptios = {
    headers: new HttpHeaders({ 'Content-Type': 'applicatio/json' }),
  };

  getTodo(): Observable<TODO[]> {
    return this.http.get<TODO[]>(this.path).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  addTodo(todo: TODO): Observable<TODO> {
    return this.http.post<TODO>(this.path, todo, this.httpOptios);
  }
  getID(id: number): Observable<TODO> {
    const url = `${this.path}/${id}`;
    return this.http.get<TODO>(url);
  }
  updateTodo(todo: TODO): Observable<any> {
    return this.http.put(this.path, todo, this.httpOptios);
  }
  deleteTodo(id: number): Observable<TODO> {
    const url = `${this.path}/${id}`;
    return this.http.delete<TODO>(url, this.httpOptios);
  }
}
