import {Component} from "@angular/core";
import {TodoVo} from "../domain/todo.vo";

@Component({
  templateUrl: 'angular.component.html',
  styleUrls: ['angular.component.scss']
})
export class AngularComponent {
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

}
