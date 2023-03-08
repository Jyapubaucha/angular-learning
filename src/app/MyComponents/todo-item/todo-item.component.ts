import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  //Passing data to parent component "Todo Component" to delete the clicked item
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

  //Passing data to parent component "Todo Component" to show active task or not
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
    
  }

  onClick(todo: Todo){
    this.todoDelete.emit(todo)
    console.log("On click has been triggered!");
  }

  onCheckBoxClick(todo: Todo){
      this.todoCheckbox.emit(todo);
  }

}
