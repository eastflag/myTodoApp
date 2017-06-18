import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BootstrapComponent} from "./bootstrap/bootstrap.component";
import {HomeComponent} from "./home/home.component";
import {AppRoutingModule} from "./app-routing";
import {JqueryComponent} from "./jquery/jquery.component";

@NgModule({
  declarations: [
    AppComponent,
    BootstrapComponent,
    HomeComponent,
    JqueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
