import {Component, OnInit} from "@angular/core";
import {TodoVo} from "../domain/todo.vo";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {AppService} from "../app.service";

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

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.findTodo();
  }

  findTodo() {
    this.appService.findTodo()
      .then(body => {
        console.log(body);
        this.todoList = body;
      });
  }

  add_todo() {
    let item = new TodoVo(false, this.todo);
    this.appService.addTodo(item)
      .then(body => {
        if(body.result === 0) {
          this.findTodo();
          // todo: 전체가 애니메이션 되므로 하나만 추가해야 함.
        }
      })
  }

  updated(index: number): void {
    this.todoList[index].isFinished = !this.todoList[index].isFinished;
  }

  delete(index: number) {
    let result = confirm("삭제하시겠습니까?");
    if (result) {
      this.todoList.splice(index, 1);
    }
  }
}
