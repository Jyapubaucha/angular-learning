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
    //Get the id to operate delete action
    const index = this.todos.indexOf(todo);
    //Delete the todo list from the list
    this.todos.splice(index, 1);
  }

  addTodo(todo: Todo){
    console.log(todo)
    //Add todo to push into new list
    this.todos.push(todo);
  }
}
