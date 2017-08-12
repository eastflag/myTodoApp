import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BootstrapComponent} from "./bootstrap/bootstrap.component";
import {HomeComponent} from "./home/home.component";
import {AppRoutingModule} from "./app-routing";
import {JqueryComponent} from "./jquery/jquery.component";
import {AngularComponent} from "./angular/angular.component";
import {FormsModule} from "@angular/forms";
import {MyDatePipe} from "./shared/my.date.pipe";
import {HighlightDirective} from "./shared/highlight.directive";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpComponent} from "./http/http.component";

@NgModule({
  declarations: [
    AppComponent,
    BootstrapComponent,
    HomeComponent,
    JqueryComponent,
    AngularComponent,
    MyDatePipe,
    HighlightDirective,
    HttpComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
