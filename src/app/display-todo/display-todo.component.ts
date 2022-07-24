import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TODO } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-display-todo',
  templateUrl: './display-todo.component.html',
  styleUrls: ['./display-todo.component.css'],
})
export class DisplayTodoComponent implements OnInit {
  arr: any[] = [];
  todo: TODO[] = [];
  constructor(private service: TodoService) {}

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo(): void {
    this.service.getTodo().subscribe((task) => (this.todo = task));
  }
  delete(to: TODO): void {
    this.todo = this.todo.filter((task) => task !== to);
    this.service.deleteTodo(to.id).subscribe();
  }
  Selectedid(id: any, event) {
    if (event.target.checked) {
      this.arr.push(id);
    } else {
      this.Removeid(id.id);
    }
    console.log(this.arr);
  }
  Removeid(key: number) {
    this.arr.forEach((obj, index) => {
      if (obj.id == key) this.arr.splice(index, 1);
    });
  }
  deleteAll(): void {
    this.arr.forEach((obj) => {
      this.delete(obj);
    });
  }
}
