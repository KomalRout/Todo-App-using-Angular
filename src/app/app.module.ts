import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TodoListService } from './todo-list.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DisplayTodoComponent } from './display-todo/display-todo.component';
import { TodoService } from './todo.service';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(TodoListService, {
      dataEncapsulation: false,
    }),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    DisplayTodoComponent,
    AddTodoComponent,
    UpdateTodoComponent,
  ],
  providers: [TodoListService, TodoService, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
