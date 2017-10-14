import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import {AdminRoutingModule} from "./admin.routing";
import {AdminComponent} from "./admin.component";
import {MatToolbarModule} from "@angular/material";

@NgModule({
  declarations: [
    AdminComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
  ],

})
export class AdminModule { }
