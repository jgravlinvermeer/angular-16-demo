import { Component } from '@angular/core';
import {routes} from "./app-routing.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-16-demo';
  readonly routes = routes.filter(r => r.path !== '**');
}
