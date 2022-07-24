import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable()
export class TodoListService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const toDo = [
      {
        id: 1,
        task: 'Buy fruits',
        created_date: '2022-03-03',
      },
      {
        id: 2,
        task: 'Go to the Gym',
        created_date: '2022-03-03',
      },
    ];
    return { toDo };
  }
}
