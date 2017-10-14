import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import {AdminRoutingModule} from "./admin.routing";
import {AdminComponent} from "./admin.component";
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule} from "@angular/material";
import { WriteComponent } from './news/write/write.component';
import {FormsModule} from "@angular/forms";
import {CKEditorModule} from "ng2-ckeditor";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AdminService} from "./admin.service";

@NgModule({
  declarations: [
    AdminComponent,
    NewsComponent,
    WriteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    FlexLayoutModule,
    // ckeditor module
    CKEditorModule,
    // material module
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [AdminService]
})
export class AdminModule { }
