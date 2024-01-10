import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RouterInputComponent} from "./components/router-input/router-input.component";
import {TakeUntilDestroyedComponent} from "./components/take-until-destroyed/take-until-destroyed.component";
import {TakeUntilForeverComponent} from "./components/take-until-forever/take-until-forever.component";
import {HomeComponent} from "./components/home/home.component";
import {StandaloneComponent} from "./components/standalone/standalone.component";

export const routes: Routes = [
  {
    path: "search",
    component: RouterInputComponent,
  },
  { path: 'takeUntilDestroyed', component: TakeUntilDestroyedComponent },
  { path: 'takeUntilForever', component: TakeUntilForeverComponent },
  { path: 'standalone', loadComponent: () => import('./components/standalone/standalone.component').then(m => m.StandaloneComponent) },
  { path: 'routerInput', children: [
      { path: '', component: RouterInputComponent },
      { path: ':routeParam', component: RouterInputComponent },
    ],
    resolve: {
      data: () => "here's data!"
    }
  },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
