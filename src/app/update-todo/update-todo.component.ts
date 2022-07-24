import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TODO } from '../todo';
import { TodoService } from '../todo.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css'],
})
export class UpdateTodoComponent implements OnInit {
  todo: TODO;
  constructor(
    private route: ActivatedRoute,
    private service: TodoService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getTodo();
  }
  getTodo(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.service.getID(id).subscribe((task) => (this.todo = task));
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.todo) {
      this.service.updateTodo(this.todo).subscribe(() => this.goBack());
    }
  }
}
