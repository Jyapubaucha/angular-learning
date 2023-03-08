import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit  { 

  todos:Todo[];
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'First ToDo',
        desc: 'Learn Angular',
        active: true
      },
      {
        sno: 2,
        title: 'Second ToDo',
        desc: 'Learn React',
        active: false
      },
      {
        sno: 3,
        title: 'Third ToDo',
        desc: 'Learn Vue',
        active: false
      }
    ]
  }

  ngOnInit(): void {
    
  }

  deleteTodo(todo: Todo){
    console.log(todo)
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
