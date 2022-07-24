import { Component, OnInit } from '@angular/core';
import { TODO } from '../todo';
import { Location } from '@angular/common';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  todo: TODO[] = [];
  constructor(private service: TodoService, private location: Location) {}

  ngOnInit() {}
  goBack(): void {
    this.location.back();
  }


  add(task: string, created_date: string) {
    task = task.trim();
    created_date = created_date.trim();
    this.service
      .addTodo({ task, created_date } as TODO)
      .subscribe((newtask) => {
        this.todo.push(newtask);
        this.goBack();
      });
  }
}
