import {Component} from "@angular/core";
import {TodoVo} from "../domain/todo.vo";
import {animate, state, style, transition, trigger} from "@angular/animations";

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
export class HttpComponent {
  todo: string;
  // 1. 모델 정의
  todoList = [];

  add_todo() {
    // todo 리터럴 객체를 생성
    let item = new TodoVo(false, this.todo, new Date().toString(), new Date().toString());

    // todoList 배열에 담기
    this.todoList.unshift(item);

    this.todo = null;
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
