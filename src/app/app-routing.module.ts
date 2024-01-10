import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RouterInputComponent} from "./components/router-input/router-input.component";
import {TakeUntilDestroyedComponent} from "./components/take-until-destroyed/take-until-destroyed.component";
import {TakeUntilForeverComponent} from "./components/take-until-forever/take-until-forever.component";
import {HomeComponent} from "./components/home/home.component";

export const routes: Routes = [
  {
    path: "search",
    component: RouterInputComponent,
  },
  { path: 'takeUntilDestroyed', component: TakeUntilDestroyedComponent },
  { path: 'takeUntilForever', component: TakeUntilForeverComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
