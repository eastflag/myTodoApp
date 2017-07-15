import {AfterViewInit, Component, OnInit} from "@angular/core";

declare var $: any;
declare var todo_list: any;
declare var refresh: any;

@Component({
  templateUrl: 'jquery.component.html',
  styleUrls: ['jquery.component.scss']
})
export class JqueryComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // jquery
    this.getTodoList();
  }

  getTodoList() {
    $.ajax({
      url: 'http://www.javabrain.kr:8080/api/todo',
      method: 'get',
      success: function(data) {
        todo_list = data;
        refresh();
      }
    })
  }
}
