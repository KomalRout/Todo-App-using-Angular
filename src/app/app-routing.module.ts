import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { DisplayTodoComponent } from './display-todo/display-todo.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';

const routes: Routes = [
  { path: '', component: DisplayTodoComponent },
  { path: 'addTask', component: AddTodoComponent },
  { path: 'update/:id', component: UpdateTodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
