import {Component} from "@angular/core";

@Component({
  templateUrl: 'angular.component.html',
  styleUrls: ['angular.component.scss']
})
export class AngularComponent {
  add_todo() {
    console.log('clicked');
  }
}
