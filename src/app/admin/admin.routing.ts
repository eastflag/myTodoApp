import {RouterModule, Routes} from "@angular/router";
import {NewsComponent} from "./news/news.component";
import {NgModule} from "@angular/core";
import {AdminComponent} from "./admin.component";

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    {path: 'news', component: NewsComponent},
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
