import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RouterInputComponent} from "./components/router-input/router-input.component";

const routes: Routes = [   {
    path: "search",
    component: RouterInputComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
