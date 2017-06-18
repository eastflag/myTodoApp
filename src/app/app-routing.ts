import {RouterModule, Routes} from "@angular/router";
import {BootstrapComponent} from "./bootstrap/bootstrap.component";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path: 'bootstrap', component: BootstrapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
