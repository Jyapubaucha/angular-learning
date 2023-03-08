import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit  { 

  localItem: string | null;

  todos:Todo[];
  constructor() {

    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null) {
      this.todos = []
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
    
  }

  deleteTodo(todo: Todo){
    console.log(todo)
    //Get the id to operate delete action
    const index = this.todos.indexOf(todo);
    //Delete the todo list from the list
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo){
    console.log(todo)
    //Add todo to push into new list
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
