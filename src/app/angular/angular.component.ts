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

  getCurrentDate(myDate: string): string {
    const date = new Date(myDate);
    return date.getFullYear() + "-" + (this.addZero(date.getMonth() + 1)) + "-" + this.addZero(date.getDate()) + " "
      + this.addZero(date.getHours()) + ":" + this.addZero(date.getMinutes()) + ":" + this.addZero(date.getSeconds());
  }

  addZero(digit: number): string {
    // digit 가 문자가 아니라 숫자이다 digit.length로는 안됨.
    if (digit < 10) {
      return "0" + digit;
    } else {
      return "" + digit;
    }
  }

}
