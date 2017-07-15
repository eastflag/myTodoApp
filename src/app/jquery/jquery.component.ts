import {AfterViewInit, Component} from "@angular/core";

declare var $: any;
declare var todo_list: any;
declare var refresh: any;

@Component({
  templateUrl: 'jquery.component.html',
  styleUrls: ['jquery.component.scss']
})
export class JqueryComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // jquery로 데이터 가져오기
    $.ajax({
      url: 'http://www.javabrain.kr:8080/api/todo',
      method: 'GET',
      datatype: 'json',
      success: function(data) {
        console.log(data);
        todo_list = data;
        refresh();
      }
    });
  }
}
