import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';

const routes: Routes = [
  { path: "", redirectTo: "list", pathMatch: "full" }, //pathMatch full means exactly nothing to go to my list component... or exactly the path....
  { path: "list", component: CoffeeListComponent },
  { path: "details/:id", component: CoffeeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
