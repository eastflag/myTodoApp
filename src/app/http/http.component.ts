import {Component, OnInit} from "@angular/core";
import {TodoVo} from "../domain/todo.vo";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {AppService} from "../app.service";
import {PageVO} from "../domain/PageVO";
import {PageEvent} from "@angular/material";

@Component({
  templateUrl: 'http.component.html',
  styleUrls: ['http.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class HttpComponent implements OnInit {
  todo: string;
  // 1. 모델 정의
  todoList = [];
  // 저장, 복원할 컬렉션 정의
  tempTodoList: Map<number, TodoVo>  = new Map<number, TodoVo>();
  //페이징 변수
  page; PageVO;

  constructor(private appService: AppService) {
    this.page = new PageVO(0, 10, 50, [10, 25, 50, 100]);
  }

  ngOnInit(): void {
    this.findTodo();
  }

  findTodo() {
    this.appService.findTodo(this.page)
      .then(body => {
        console.log(body);
        this.todoList = body;
      });
  }

  add_todo() {
    let item = new TodoVo(false, this.todo);
    this.appService.addTodo(item)
      .then(data => {
        if(data) {
          // todo: 전체가 애니메이션 되므로 하나만 추가해야 함.
          this.todoList.unshift(data);
        }
      })
  }

  updated(todo: TodoVo): void {
    this.appService.modifyTodo(todo)
      .then((data: TodoVo) => {
        //call by value 와 call by reference
        todo.isFinished = data.isFinished;
        todo.todo = data.todo;
        todo.updated = data.updated;
        todo.isEdited = false;
      })
  }

  delete(todo: TodoVo) {
    let result = confirm("삭제하시겠습니까?");
    if (result) {
      this.appService.removeTodo(todo.todo_id)
        .then((data) => {
          if(data.result === 0) {
            this.todoList.forEach((item, index) => {
              if (item.todo_id === todo.todo_id) {
                this.todoList.splice(index, 1);
              }
            })
          }
        });
    }
  }

  save(todo: TodoVo) {
    // 기존 데이터 저장
    let tempTodo: TodoVo = new TodoVo();
    tempTodo.isFinished = todo.isFinished;
    tempTodo.todo = todo.todo;
    this.tempTodoList.set(todo.todo_id, tempTodo);

    todo.isEdited = true;
  }

  restore(todo: TodoVo) {
    // 기존 데이터 복원
    let tempTodo: TodoVo = this.tempTodoList.get(todo.todo_id);
    todo.isFinished = tempTodo.isFinished;
    todo.todo = tempTodo.todo;

    todo.isEdited = false;
  }

  pageChanged(event: PageEvent) {
    //페이지 변경 처리
    console.log(event);
    this.page.pageIndex = event.pageIndex;
    this.findTodo();
  }
}
